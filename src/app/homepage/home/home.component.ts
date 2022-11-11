import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginDialogComponent } from 'src/app/login-dialog/login-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  scrollTo(ID: string): void {
    document.getElementById(ID).scrollIntoView({ behavior: "smooth" });
  }


  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }


  openApp() {
    this.router.navigate(['/dashboard']);
  }


  reload() {
    location.reload();
  }
}
