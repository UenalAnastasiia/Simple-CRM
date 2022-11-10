import { Component, OnInit } from '@angular/core';
import { doc, Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { deleteDoc } from '@firebase/firestore';
import { DeleteTaskMessageComponent } from 'src/app/messages-bar/delete-task-message/delete-task-message.component';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-delete-task',
  templateUrl: './dialog-delete-task.component.html',
  styleUrls: ['./dialog-delete-task.component.scss']
})
export class DialogDeleteTaskComponent implements OnInit {
  loading: boolean = false;
  task: Task = new Task();
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(public dialogRef: MatDialogRef<DialogDeleteTaskComponent>, private firestore: Firestore, private deleteBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  async deleteTask() {
    this.loading = true;
    await deleteDoc(doc(this.firestore, "tasks", this.task.id));

    setTimeout(() => {
      this.loading = false;
      window.location.href = '/dashboard';
      this.showDeleteMessage();
    }, 1500);
  }


  showDeleteMessage() {
    this.deleteBar.openFromComponent(DeleteTaskMessageComponent, {
      duration: 2500,
      panelClass: ['white-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

}
