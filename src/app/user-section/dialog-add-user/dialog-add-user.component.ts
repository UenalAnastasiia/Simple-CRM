import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { collection, addDoc } from "firebase/firestore";
import { countries } from 'src/assets/store/country-data-store';
import { MatRadioChange } from '@angular/material/radio';
import { FormControl, Validators } from '@angular/forms';

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

  firstName = new FormControl('', [Validators.required, Validators.minLength(1)]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(1)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  telephone = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]);
  datepicker = new FormControl('', [Validators.required]);
  country = new FormControl('', [Validators.required]);


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
    const docRef = await addDoc(collection(this.firestore, "users"), this.user.toJSON())
    this.user.id = docRef.id;
    await setDoc(doc(this.firestore, "users", this.user.id), this.user.toJSON());
  }
}
