import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";

@Component({
  selector: 'app-time-board',
  templateUrl: './time-board.component.html',
  styleUrls: ['./time-board.component.scss']
})
export class TimeBoardComponent implements OnInit, OnDestroy {
  currentDate: Date | null;

  time: any;
  timeFormat: any;
  berlinDate = new Date();
  berlinTime = new Date();
  nyDate = new Date();
  nyTime = new Date();
  londonDate = new Date();
  londonTime = new Date();
  tokyoDate = new Date();
  tokyoTime = new Date();
  dubaiDate = new Date();
  dubaiTime = new Date();
  intervalId: any;
  subscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.showTimeData();
  }

  showTimeData() {
    this.intervalId = setInterval(() => { this.time = new Date(); }, 1000);

    this.subscription = timer(0, 1000).pipe(map(() => new Date()), share()).subscribe(() => {
      this.berlinTimeZone();
      this.nyTimeZone();
      this.londonTimeZone();
      this.tokyoTimeZone();
      this.dubaiTimeZone();
    });
  }


  berlinTimeZone() {
    const berlinDate = this.changeTimeZone(new Date(), 'Europe/Berlin');
    this.berlinTime = berlinDate;
  }


  nyTimeZone() {
    const nyDate = this.changeTimeZone(new Date(), 'America/New_York');
    this.nyTime = nyDate;
  }


  londonTimeZone() {
    const londonDate = this.changeTimeZone(new Date(), 'Europe/London');
    this.londonTime = londonDate;
  }


  tokyoTimeZone() {
    const tokyoDate = this.changeTimeZone(new Date(), 'Asia/Tokyo');
    this.tokyoTime = tokyoDate;
  }


  dubaiTimeZone() {
    const dubaiDate = this.changeTimeZone(new Date(), 'Asia/Dubai');
    this.dubaiTime = dubaiDate;
  }


  changeTimeZone(date: any, timeZone: any) {
    if (typeof date === 'string') {
      return new Date(new Date(date).toLocaleString('en-US', { timeZone }));
    }

    return new Date(date.toLocaleString('en-US', { timeZone }));
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
