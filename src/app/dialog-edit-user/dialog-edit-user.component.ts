import { Component, OnInit } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  
  user: User;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore) { }

  ngOnInit(): void { }


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
