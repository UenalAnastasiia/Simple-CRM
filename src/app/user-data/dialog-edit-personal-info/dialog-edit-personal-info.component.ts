import { Component, OnInit } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-personal-info',
  templateUrl: './dialog-edit-personal-info.component.html',
  styleUrls: ['./dialog-edit-personal-info.component.scss']
})
export class DialogEditPersonalInfoComponent implements OnInit {
  user: User;
  loading: boolean = false;
  updateBirthDate: any;
  currentBirthDate: any;

  
  constructor(public dialogRef: MatDialogRef<DialogEditPersonalInfoComponent>, private firestore: Firestore) { }

  ngOnInit(): void { }


  onChange(event: MatRadioChange) {
    this.user.gender = event.value;
  }


  async saveUser() {
    this.checkBirthday();
    await setDoc(doc(this.firestore, "users", this.user.id), this.user.toJSON());
    this.loading = true;
    this.closeDialog();
    this.reloadUserData();
  }


  checkBirthday() {
    if (!this.updateBirthDate) {
      this.user.birthDate = this.currentBirthDate;
    } else {
      this.user.birthDate = this.updateBirthDate.getTime();
    }
  }


  closeDialog() {
    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close();
    }, 1500);
  }


  reloadUserData() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
