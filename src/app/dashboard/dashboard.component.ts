import { Component, OnInit, } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userLength: number;

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    this.contactsLength();
  }


  async contactsLength() {
    const userCollection = collection(this.firestore, 'users');
    const docsSnap = await getDocs(userCollection);

    docsSnap.forEach(() => {
      this.userLength = docsSnap.docs.length;
    });
  }

}
