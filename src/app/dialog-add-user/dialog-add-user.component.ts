import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from "firebase/firestore"; 

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: Firestore) { }

  ngOnInit(): void { }


  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user: ', this.user);
    this.loading = true;

    const userCollection = collection(this.firestore, 'users');
    await addDoc(userCollection, this.user.toJSON());
    this.loading = false;
    this.dialogRef.close();
    // addDoc(userCollection, { user: this.user.toJSON() }).then((result: any) => {
    //   this.loading = false;
    //   this.dialogRef.close();
    //   console.log('Adding user finished', result);
    // });
  }
}
