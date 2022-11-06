import { Component, OnInit } from '@angular/core';
import { collection, collectionData, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: Task = new Task();
  taskID: any;
  taskData: any;
  loading: boolean = false;
  updateStartDate: any;
  editable: boolean = false;  
  // currentStartDate: any;
  // updateDeadlineDate: any;
  // currentDeadlineDate: any;
  // value: any;
  // horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  // verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private route: ActivatedRoute, private firestore: Firestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.taskID = params.get('id');
    });

    this.getDocRef(this.taskID);
  }


  async getDocRef(id: string) {
    const docRef = doc(this.firestore, `tasks/${id}`);
    const snapDoc = await getDoc(docRef);
    this.taskData = snapDoc.data();
    this.task = new Task(this.taskData);
    console.log('Show ', this.task)
    this.task.id = this.taskID;
  }


  // onChange(event: MatRadioChange) {
  //   this.task.priority = event.value;
  // }


  // selectionChange(value: any) {
  //   this.task.department = value;
  // }


  // async saveTask() {
  //   this.checkStartDate();
  //   this.checkDeadlineDate();
  //   await setDoc(doc(this.firestore, "tasks", this.task.id), this.task.toJSON());
  //   this.loading = true;
  //   setTimeout(() => {
  //     this.loading = false;
  //   }, 1500);
  // }


  // checkStartDate() {
  //   if (!this.updateStartDate) {
  //     this.task.startDate = this.currentStartDate;
  //   } else {
  //     this.task.startDate = this.updateStartDate.getTime();
  //   }
  // }


  // checkDeadlineDate() {
  //   if (!this.updateDeadlineDate) {
  //     this.task.deadlineDate = this.currentDeadlineDate;
  //   } else {
  //     this.task.deadlineDate = this.updateDeadlineDate.getTime();
  //   }
  // }

}
