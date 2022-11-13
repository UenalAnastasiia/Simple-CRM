import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogAddTaskComponent } from './task-section/dialog-add-task/dialog-add-task.component';
import { DashboardComponent } from './dashboard-section/dashboard/dashboard.component';
import { UserDetailsComponent } from './user-section/user-details/user-details.component';
import { UserComponent } from './user-section//user/user.component';
import { TaskDetailsComponent } from './task-section/task-details/task-details.component';
import { HomeComponent } from './homepage/home/home.component';
import { ImprintComponent } from './homepage/imprint/imprint.component';
import { DataProtectionComponent } from './homepage/data-protection/data-protection.component';
import { HelpSectionComponent } from './help-section/help-section.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'task', component: DialogAddTaskComponent },
  { path: 'task/:id', component: TaskDetailsComponent },
  { path: 'help', component: HelpSectionComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
