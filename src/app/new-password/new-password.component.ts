import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LOGIN } from '../mock-logins';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  newUser = '';
  newPass = '';

  constructor(private router:Router) { }

  ngOnInit(): void {}

  usernameInput(username: string){
    this.newUser = username;
  }

  passwordInput(password:string){
    this.newPass = password;
  }

  saveChanges(){
    if(!this.newUser && !this.newPass){
      alert('Please add a username and password!');
      return;
    } else if (!this.newUser && this.newPass){
      alert('Please add a username!');
      return;
    } else if (this.newUser && !this.newPass){
      alert('Please add a password!');
      return;
    }

        
    LOGIN.forEach((el) => {
      // if username & password correct -> index page html
      console.log(this.newUser, el.username)
      if(this.newUser === el.username){
        LOGIN.push({username: this.newUser, password:this.newPass});
        alert('Password Updated! Please redirect to the Home Page');
        throw stop;
      }})
    // if username incorrect -> alert incorrect username -> make new account or go home
      alert('Username Incorrect.');
  }
}
