import { Component, OnInit, ViewEncapsulation, ViewChild, HostListener } from '@angular/core';
import { Firestore, collectionData, getDocs } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { collection } from '@firebase/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
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
  showColumn: boolean = false;

  dataSource: MatTableDataSource<User>;
  public displayedColumns: string[] = ['name', 'email', 'country'];
  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);


  constructor(public dialog: MatDialog, private firestore: Firestore) { }

  
  /**
   * Push Users from DB in array
   * Load Data into paginator
   */
  ngOnInit(): void {
    this.checkScreenWidth();

    const userCollection = collection(this.firestore, 'users');
    this.allUsers$ = collectionData(userCollection, { idField: "userID" });

    this.allUsers$.subscribe((loadData: any) => {
      this.allUsers = loadData;
      this.dataSource = new MatTableDataSource(this.allUsers);
      this.dataSource.paginator = this.paginator;
    });
  }


  /**
   * @param event Search User
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  /**
   * Show Text, if no users in the list
   */
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


  /**
   * @param event Check Mobile Device Screenwidth
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }


  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }


  checkScreenWidth() {
    this.getScreenWidth().subscribe(width => {
      if (width < 600) {
        this.showColumn = true;
      } else if (width > 600) {
        this.showColumn = false;
      }
    });
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}