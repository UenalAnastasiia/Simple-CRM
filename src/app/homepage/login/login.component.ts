import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SignUpMessageComponent } from '../../messages-bar/sign-up-message/sign-up-message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    userName: '',
    password: ''
  };

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  email = new FormControl('', [Validators.required, Validators.email]);


  constructor(public dialogRef: MatDialogRef<LoginComponent>, private signMessage: MatSnackBar) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }


  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
    this.showSignUpMessage();
  }


  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if (isUserExist != undefined) {
      localStorage.setItem('loggedUser', JSON.stringify(this.loginObj.userName));
      this.dialogRef.close();
      window.location.replace('/dashboard');
    } else {
      alert('Wrong User Name or Password');
    }
  }


  showSignUpMessage() {
    this.signMessage.openFromComponent(SignUpMessageComponent, {
      duration: 2000,
      panelClass: ['white-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }


  loadDashboard() {
    localStorage.setItem('loggedUser', JSON.stringify('Guest'));
    window.location.replace('/dashboard');
  }
}