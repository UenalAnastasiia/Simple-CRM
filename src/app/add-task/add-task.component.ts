import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Task } from 'src/models/task.class';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

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

  constructor(private firestore: Firestore) { }

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
}
