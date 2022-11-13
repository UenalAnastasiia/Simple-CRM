import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-help-section',
  templateUrl: './help-section.component.html',
  styleUrls: ['./help-section.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HelpSectionComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: VideoURL | null;
}

export interface VideoURL {
  name: string;
  video: any;
}

const ELEMENT_DATA: VideoURL[] = [
  {
    name: 'Login',
    video: 'assets/video/login.mp4'
  },
  {
    name: 'Add User',
    video: 'assets/video/add_user.mp4'
  },
  {
    name: 'Edit und delete User',
    video: 'assets/video/edit_and_delete_user.mp4'
  },
  {
    name: 'Add Task',
    video: 'assets/video/add_task.mp4'
  },
  {
    name: 'Edit und delete Task',
    video: 'assets/video/edit_and_delete_task.mp4'
  }
];