import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogAddTaskComponent } from './task-data/dialog-add-task/dialog-add-task.component';
import { DashboardComponent } from './dashboard-data/dashboard/dashboard.component';
import { UserDetailsComponent } from './user-data/user-details/user-details.component';
import { UserComponent } from './user-data/user/user.component';
import { TaskDetailsComponent } from './task-data/task-details/task-details.component';

const routes: Routes = [ 
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'task', component: DialogAddTaskComponent },
  { path: 'task/:id', component: TaskDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
