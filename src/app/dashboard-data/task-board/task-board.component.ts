import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { TaskDetailsComponent } from 'src/app/task-data/task-details/task-details.component';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  task = new Task();
  allTasks$: Observable<any>;
  allTasks: any = [];
  taskID: string;


  constructor(public dialog: MatDialog, private firestore: Firestore) { }

  ngOnInit(): void {
    const taskCollection = collection(this.firestore, 'tasks');
    this.allTasks$ = collectionData(taskCollection, { idField: "taskID" });

    this.allTasks$.subscribe((loadData: any) => {
      console.log('Received changes:', loadData);
      this.allTasks = loadData;
    });
  }


  getCardColor(priority: string) {
    switch(priority) {
      case 'Low': return '#ffff84';
      case 'Middle': return '#7cfb7c';
      case 'High': return '#ee9090';
      default: return '';
    }
  }
}