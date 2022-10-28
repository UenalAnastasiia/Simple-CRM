import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc, onSnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userID: string;
  user: User = new User();
  userData: any;

  constructor(private route: ActivatedRoute, private firestore: Firestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userID = params.get('id');
      // console.log('ID: ', this.userID);
    });

    this.getDocRef(this.userID);
  }


  async getDocRef(id: string) {
    const docRef = doc(this.firestore, `users/${id}`);
    const snapDoc = await getDoc(docRef);
    this.userData = snapDoc.data();
    this.user = new User(this.userData);
    console.log('User Data: ', this.user);
  }
}