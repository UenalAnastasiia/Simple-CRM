import { Component, OnInit } from '@angular/core';
import { collection, collectionData, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogDeleteTaskComponent } from 'src/app/task-section/dialog-delete-task/dialog-delete-task.component';
import { DialogEditTaskComponent } from 'src/app/task-section/dialog-edit-task/dialog-edit-task.component';
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
  updateStartDate: any;
  editable: boolean = false;  

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) { }

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
    this.task.id = this.taskID;
  }


  editTask() {
    const dialog = this.dialog.open(DialogEditTaskComponent);
    dialog.componentInstance.task = new Task(this.task.toJSON());
    dialog.componentInstance.task.id = this.taskID;
    dialog.componentInstance.currentStarthDate = this.task.startDate;
    dialog.componentInstance.currentDeadlineDate = this.task.deadlineDate;
  }


  openDeleteValidation() {
    const dialog = this.dialog.open(DialogDeleteTaskComponent, { panelClass: 'mat-dialog-overflow' });
    dialog.componentInstance.task = new Task(this.task.toJSON());
  }

}
