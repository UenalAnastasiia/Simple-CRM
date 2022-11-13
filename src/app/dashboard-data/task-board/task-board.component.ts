import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore, getDocs } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
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
  noTasks: boolean = false;
  taskLength: number;


  constructor(public dialog: MatDialog, private firestore: Firestore) { }

  ngOnInit(): void {
    const taskCollection = collection(this.firestore, 'tasks');
    this.allTasks$ = collectionData(taskCollection, { idField: "taskID" });

    this.allTasks$.subscribe((loadData: any) => {
      this.allTasks = loadData;
    });
  }


  getCardColor(priority: string) {
    switch (priority) {
      case 'Low': return 'rgb(65 207 70)';
      case 'Middle': return '#ffff84';
      case 'High': return '#ee9090';
      default: return '';
    }
  }


  async checkTaskLength() {
    const userCollection = collection(this.firestore, 'tasks');
    const docsSnap = await getDocs(userCollection);

    docsSnap.forEach(() => {
      this.taskLength = docsSnap.docs.length;
    });

    if (this.taskLength == 0) {
      this.noTasks = true;
    }
  }
}
