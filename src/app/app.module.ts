import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard-section/dashboard/dashboard.component';
import { UserComponent } from './user-section/user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from './user-section/dialog-add-user/dialog-add-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { MatMenuModule } from '@angular/material/menu';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { UserDetailsComponent } from './user-section/user-details/user-details.component';
import { DialogEditAddressComponent } from './user-section/dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from './user-section/dialog-edit-user/dialog-edit-user.component';
import { MatSelectModule } from '@angular/material/select';
import { TimeBoardComponent } from './dashboard-section/time-board/time-board.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CopyMessageComponent } from './messages-bar/copy-message/copy-message.component';
import { MatRadioModule } from '@angular/material/radio';
import { DialogEditPersonalInfoComponent } from './user-section/dialog-edit-personal-info/dialog-edit-personal-info.component';
import { DialogAddTaskComponent } from './task-section/dialog-add-task/dialog-add-task.component';
import { AddTaskMessageComponent } from './messages-bar/add-task-message/add-task-message.component';
import { TaskBoardComponent } from './dashboard-section/task-board/task-board.component';
import { TaskDetailsComponent } from './task-section/task-details/task-details.component';
import { DialogEditTaskComponent } from './task-section/dialog-edit-task/dialog-edit-task.component';
import { DialogDeleteUserComponent } from './user-section/dialog-delete-user/dialog-delete-user.component';
import { DeleteUserMessageComponent } from './messages-bar/delete-user-message/delete-user-message.component';
import { DialogDeleteTaskComponent } from './task-section/dialog-delete-task/dialog-delete-task.component';
import { DeleteTaskMessageComponent } from './messages-bar/delete-task-message/delete-task-message.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './homepage/home/home.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { LoginComponent } from './homepage/login/login.component';
import { ImprintComponent } from './homepage/imprint/imprint.component';
import { DataProtectionComponent } from './homepage/data-protection/data-protection.component';
import { SignUpMessageComponent } from './messages-bar/sign-up-message/sign-up-message.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HelpSectionComponent } from './help-section/help-section.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailsComponent,
    DialogEditAddressComponent,
    DialogEditUserComponent,
    TimeBoardComponent,
    CopyMessageComponent,
    DialogEditPersonalInfoComponent,
    DialogAddTaskComponent,
    AddTaskMessageComponent,
    TaskBoardComponent,
    TaskDetailsComponent,
    DialogEditTaskComponent,
    DialogDeleteUserComponent,
    DeleteUserMessageComponent,
    DialogDeleteTaskComponent,
    DeleteTaskMessageComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ImprintComponent,
    DataProtectionComponent,
    SignUpMessageComponent,
    HelpSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatBadgeModule,
    ClipboardModule,
    MatSnackBarModule,
    MatRadioModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatTableModule,
    MatPaginatorModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }