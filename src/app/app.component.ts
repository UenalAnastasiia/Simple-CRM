import { Component } from '@angular/core';
import { Firestore, getDocs } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
