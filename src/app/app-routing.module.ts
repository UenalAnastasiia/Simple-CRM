import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogAddTaskComponent } from './task-data/dialog-add-task/dialog-add-task.component';
import { DashboardComponent } from './dashboard-data/dashboard/dashboard.component';
import { UserDetailsComponent } from './user-data/user-details/user-details.component';
import { UserComponent } from './user-data/user/user.component';
import { TaskDetailsComponent } from './task-data/task-details/task-details.component';
import { HomeComponent } from './homepage/home/home.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'task', component: DialogAddTaskComponent },
  { path: 'task/:id', component: TaskDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
