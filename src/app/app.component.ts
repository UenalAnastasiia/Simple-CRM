import { Component, OnInit } from '@angular/core';
import { Firestore, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection } from '@firebase/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userLength: number;
  taskLength: number;
  contactLength = 0;
  hidden = false;
  homePage: boolean = true;

  constructor(private firestore: Firestore, public router: Router) { }


  ngOnInit(): void {
    this.checkURL();
    this.checkUserLength();
    this.checkTaskLength();
    if (this.contactLength == 0) {
      this.hidden = !this.hidden;
    }
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
}
