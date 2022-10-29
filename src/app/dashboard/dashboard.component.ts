import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentDate: Date | null;

  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => { this.time = new Date(); }, 1000);

    this.subscription = timer(0, 1000).pipe(map(() => new Date()), share()).subscribe(time => {
        this.rxTime.getHours();
        this.rxTime.getMinutes();
        this.rxTime.getSeconds();
        // let NewTime = hour + ":" + minuts + ":" + seconds;
        this.rxTime = time;
      });
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
