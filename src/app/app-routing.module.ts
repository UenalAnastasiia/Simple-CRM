import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './task-data/add-task/add-task.component';
import { DashboardComponent } from './dashboard-data/dashboard/dashboard.component';
import { UserDetailsComponent } from './user-data/user-details/user-details.component';
import { UserComponent } from './user-data/user/user.component';

const routes: Routes = [ 
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'task', component: AddTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
