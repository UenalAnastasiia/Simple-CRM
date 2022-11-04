import { Component, OnInit, } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userLength: number;
  taskLength: number;
  contactLength = 0;
  hidden = false;

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    this.checkUserLength();
    this.checkTaskLength();
    if (this.contactLength == 0) {
      this.hidden = !this.hidden;
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
