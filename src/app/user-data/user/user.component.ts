import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  user = new User();
  allUsers$: Observable<any>;
  allUsers: any = [];
  userID: string;
  filterTerm!: string;
  userData = this.allUsers = [];

  dataSource: MatTableDataSource<User>;
  public displayedColumns: string[] = ['name', 'email', 'country'];


  constructor(public dialog: MatDialog, private firestore: Firestore) { }


  ngOnInit(): void {
    const userCollection = collection(this.firestore, 'users');
    this.allUsers$ = collectionData(userCollection, { idField: "userID" });

    this.allUsers$.subscribe((loadData: any) => {
      this.allUsers = loadData;
      this.dataSource = new MatTableDataSource(this.allUsers);
      this.dataSource.paginator = this.paginator;
    });
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}