import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CopyMessageComponent } from '../../messages-bar/copy-message/copy-message.component';
import { DialogEditPersonalInfoComponent } from '../dialog-edit-personal-info/dialog-edit-personal-info.component';
import { DialogDeleteUserComponent } from 'src/app/user-section/dialog-delete-user/dialog-delete-user.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userID: any;
  user: User = new User();
  userData: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  maleImg: boolean = false;
  femaleImg: boolean = false;
  profileImg: boolean = false;


  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog, private clipboard: Clipboard, private copyBar: MatSnackBar) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userID = params.get('id');
    });

    this.getDocRef(this.userID);
  }


  async getDocRef(id: string) {
    const docRef = doc(this.firestore, `users/${id}`);
    const snapDoc = await getDoc(docRef);
    this.userData = snapDoc.data();
    this.user = new User(this.userData);
    this.user.id = this.userID;

    this.checkProfileImg();
  }


  checkProfileImg() {
    if (this.user.gender == 'Male') {
      this.maleImg = true;
    } else if (this.user.gender == 'Female') {
      this.femaleImg = true;
    } else {
      this.profileImg = true;
    }
  }


  editUserName() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
  }


  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
  }


  editPersonal() {
    const dialog = this.dialog.open(DialogEditPersonalInfoComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.currentBirthDate = this.user.birthDate;
  }


  copyToClipboard(value: HTMLElement): void {
    const text: string = value.textContent;
    this.clipboard.copy(text);
  }


  showCopyBar() {
    this.copyBar.openFromComponent(CopyMessageComponent, {
      duration: 1000,
      panelClass: ['white-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }


  openDeleteValidation() {
    const dialog = this.dialog.open(DialogDeleteUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
  }
}