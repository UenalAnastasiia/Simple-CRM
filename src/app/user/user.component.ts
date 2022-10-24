import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
