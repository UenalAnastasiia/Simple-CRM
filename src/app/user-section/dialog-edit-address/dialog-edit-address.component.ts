import { Component, OnInit } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { countries } from 'src/assets/store/country-data-store';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {
  
  user: User;
  loading: boolean = false;
  countries: any = countries;
  country = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: Firestore) { }

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
      location.reload();
    }, 1000);
  }
}
