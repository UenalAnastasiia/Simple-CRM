import { Component, OnInit } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  
  user: User;
  loading: boolean = false;

  firstName = new FormControl('', [Validators.required, Validators.minLength(1)]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(1)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  telephone = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore) { }

  ngOnInit(): void { }


  onChange(event: MatRadioChange) {
    this.user.gender = event.value;
  }
  

  async saveUser() {
    await setDoc(doc(this.firestore, "users", this.user.id), this.user.toJSON());
    this.loading = true;
    this.closeDialog();
    this.reloadUserData();
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
