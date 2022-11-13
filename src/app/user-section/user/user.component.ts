import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Firestore, collectionData, getDocs } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  user = new User();
  allUsers$: Observable<any>;
  allUsers: any = [];
  userID: string;
  noUsers: boolean = false;
  userLength: number;

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


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  async checkUserLength() {
    const userCollection = collection(this.firestore, 'users');
    const docsSnap = await getDocs(userCollection);

    docsSnap.forEach(() => {
      this.userLength = docsSnap.docs.length;
    });

    if (this.userLength == 0) {
      this.noUsers = true;
    }
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}