import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { deleteDoc, doc } from '@firebase/firestore';
import { DeleteUserMessageComponent } from 'src/app/messages-bar/delete-user-message/delete-user-message.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent implements OnInit {

  loading: boolean = false;
  user: User = new User();
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(public dialogRef: MatDialogRef<DialogDeleteUserComponent>, private firestore: Firestore, private deleteBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  async deleteUser() {
    this.loading = true;
    await deleteDoc(doc(this.firestore, "users", this.user.id));

    setTimeout(() => {
      this.loading = false;
      window.location.href = '/user';
      this.showDeleteMessage();
    }, 1500);
  }


  showDeleteMessage() {
    this.deleteBar.openFromComponent(DeleteUserMessageComponent, {
      duration: 1000,
      panelClass: ['white-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
