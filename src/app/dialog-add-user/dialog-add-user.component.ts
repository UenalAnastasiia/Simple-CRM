import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { addDoc, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, public firestore: Firestore) { }

  ngOnInit(): void {
  }


  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user: ', this.user);
    this.loading = true;
    const userCollection = collection(this.firestore, 'users');
    addDoc(userCollection, { user: this.user.toJSON() }).then((result: any) => {
      this.loading = false;
      this.dialogRef.close();
      console.log('Adding user finished', result);
    });
  }


  onCancelClick(): void {
    this.dialogRef.close();
  }

}
