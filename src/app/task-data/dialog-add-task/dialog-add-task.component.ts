import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Task } from 'src/models/task.class';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { AddTaskMessageComponent } from '../../messages-bar/add-task-message/add-task-message.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {
  task = new Task();
  loading: boolean = false;
  dateSign: boolean = false;
  deadlineDate: Date;
  startDate: Date;
  value: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  title = new FormControl('', [Validators.required, Validators.minLength(1)]);
  description = new FormControl('', [Validators.required, Validators.minLength(1)]);
  datepicker = new FormControl('', [Validators.required]);
  department = new FormControl('', [Validators.required]);


  constructor(private firestore: Firestore, private taskMessage: MatSnackBar) { }

  ngOnInit(): void { }


  onChange(event: MatRadioChange) {
    this.task.priority = event.value;
  }


  selectionChange(value: any) {
    this.task.department = value;
  }


  checkAndSave() {
    this.task.startDate = this.startDate.getTime();
    if (this.deadlineDate >= this.startDate) {
      this.task.deadlineDate = this.deadlineDate.getTime();
      this.saveTask();
    } else {
      this.dateSign = true;
    }
  }


  async saveTask() {
    this.loading = true;
    this.dateSign = false;
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
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
