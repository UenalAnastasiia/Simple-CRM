import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Firestore, getDocs } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { collection } from '@firebase/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginComponent } from './homepage/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') matSidenav: MatSidenav;
  userLength: number;
  taskLength: number;
  contactLength = 0;
  hidden = false;
  homePage: boolean = true;

  loggedUser: any;

  showToggle: string;
  mode: any;
  openSidenav: boolean;
  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);


  constructor(private firestore: Firestore, public router: Router, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.checkURL();
    this.checkUserLength();
    this.checkTaskLength();
    this.checkScreenWidth();
    if (this.contactLength == 0) {
      this.hidden = !this.hidden;
    }
    
    this.loadLoggedUserName();
  }


  loadLoggedUserName() {
    const localData = localStorage.getItem('loggedUser');
    if (localData != null) {
      this.loggedUser = JSON.parse(localData);
    }
  }


  checkScreenWidth() {
    this.getScreenWidth().subscribe(width => {
      if (width < 1050) {
        this.showToggle = 'show';
        this.mode = 'over';
        this.openSidenav = false;
      } else if (width > 1050) {
        this.showToggle = 'hide';
        this.mode = 'side';
        this.openSidenav = true;
      }
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth$.next(event.target.innerWidth);
  }


  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }


  checkURL() {
    if (window.location.href.includes('user') || window.location.href.includes('dashboard') || window.location.href.includes('task') || window.location.href.includes('help')) {
      this.homePage = false;
    }
  }


  async checkUserLength() {
    const userCollection = collection(this.firestore, 'users');
    const docsSnap = await getDocs(userCollection);

    docsSnap.forEach(() => {
      this.userLength = docsSnap.docs.length;
    });
  }


  async checkTaskLength() {
    const userCollection = collection(this.firestore, 'tasks');
    const docsSnap = await getDocs(userCollection);

    docsSnap.forEach(() => {
      this.taskLength = docsSnap.docs.length;
    });
  }


  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }
}
