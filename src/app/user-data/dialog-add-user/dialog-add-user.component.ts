import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from "firebase/firestore";
import { countries } from 'src/assets/store/country-data-store';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading: boolean = false;
  countries: any = countries;
  gender: any;


  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: Firestore) {
  }

  ngOnInit(): void { }


  onChange(event: MatRadioChange) {
    this.user.gender = event.value;
  }


  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    this.addDataToDB();

    setTimeout(() => {
      this.loading = false;
      location.reload();
      this.dialogRef.close();
    }, 2000);
  }


  async addDataToDB() {
    const userCollection = collection(this.firestore, 'users');
    await addDoc(userCollection, this.user.toJSON());
    this.user.id = userCollection.id;
  }
}