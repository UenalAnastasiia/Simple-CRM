import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent implements OnInit {

  user = new User();
  allUsers$: Observable<any>;
  allUsers: any = [];
  userID: string;

  constructor(public dialog: MatDialog, private firestore: Firestore, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const userCollection = collection(this.firestore, 'users');
    this.allUsers$ = collectionData(userCollection, { idField: "userID" });

    this.allUsers$.subscribe((loadData: any) => {
      console.log('Received changes:', loadData);
      this.allUsers = loadData;
    });
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}