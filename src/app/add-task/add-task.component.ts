import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Task } from 'src/models/task.class';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { AddTaskMessageComponent } from '../add-task-message/add-task-message.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  task = new Task();
  loading: boolean = false;
  deadlineDate: Date;
  startDate: Date;
  value: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private firestore: Firestore, private taskMessage: MatSnackBar) { }

  ngOnInit(): void { }


  onChange(event: MatRadioChange) {
    this.task.priority = event.value;
  }

  selectionChange(value: any) {
    this.task.department = value;
  }


  async saveTask() {
    this.task.startDate = this.startDate.getTime();
    this.task.deadlineDate = this.deadlineDate.getTime();
    this.loading = true;
    this.showTaskMessage();
    this.addDataToDB();

    setTimeout(() => {
      this.loading = false;
      location.reload();
    }, 2000);
  }


  async addDataToDB() {
    const userCollection = collection(this.firestore, 'tasks');
    await addDoc(userCollection, this.task.toJSON());
    this.task.id = userCollection.id;
  }


  showTaskMessage() {
    this.taskMessage.openFromComponent(AddTaskMessageComponent, {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
