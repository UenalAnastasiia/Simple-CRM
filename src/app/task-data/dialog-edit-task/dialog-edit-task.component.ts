import { Component, OnInit } from '@angular/core';
import { doc, Firestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { setDoc } from '@firebase/firestore';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-edit-task',
  templateUrl: './dialog-edit-task.component.html',
  styleUrls: ['./dialog-edit-task.component.scss']
})
export class DialogEditTaskComponent implements OnInit {
  task: Task;
  loading: boolean = false;
  dateSign: boolean = false;
  value: any;
  currentStarthDate: any;
  currentDeadlineDate: any;
  updateDeadlineDate: any;
  updateStartDate: any;

  title = new FormControl('', [Validators.required, Validators.minLength(1)]);
  description = new FormControl('', [Validators.required, Validators.minLength(1)]);
  datepicker = new FormControl('', [Validators.required]);
  department = new FormControl('', [Validators.required]);


  constructor(public dialogRef: MatDialogRef<DialogEditTaskComponent>, private firestore: Firestore) { }

  ngOnInit(): void {
  }

  onChange(event: MatRadioChange) {
    this.task.priority = event.value;
  }


  selectionChange(value: any) {
    this.task.department = value;
  }


  checkAndSave() {
    this.task.startDate = this.updateStartDate.getTime();
    if (this.updateDeadlineDate >= this.updateStartDate) {
      this.task.deadlineDate = this.updateDeadlineDate.getTime();
      this.saveTask();
    } else {
      this.dateSign = true;
    }
  }


  async saveTask() {
    this.checkStartDate();
    this.checkDeadlineDate();
    await setDoc(doc(this.firestore, "tasks", this.task.id), this.task.toJSON());
    this.loading = true;
    this.closeDialog();
    this.reloadUserData();
  }


  checkStartDate() {
    if (!this.updateStartDate) {
      this.task.startDate = this.currentStarthDate;
    } else {
      this.task.startDate = this.updateStartDate.getTime();
    }
  }


  checkDeadlineDate() {
    if (!this.updateDeadlineDate) {
      this.task.deadlineDate = this.currentDeadlineDate;
    } else {
      this.task.deadlineDate = this.updateDeadlineDate.getTime();
    }
  }


  closeDialog() {
    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close();
    }, 1500);
  }


  reloadUserData() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

}
