import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  username = '';
  password = '';
  map = new Map<string, string>();
  errorMessage= '';

  usernameInput(username: string){
    this.username = username;
  }

  passwordInput(password:string){
    this.password = password;
  }

  // inserts input of name into members array when 'Add' button is clicked
  submit(){
    if (!this.username || !this.password){
      if(!this.username && this.password){
        this.errorMessage = "USERNAME CANNOT BE EMPTY";
        return;
      } else if (this.username && !this.password){
        this.errorMessage = "PASSWORD CANNOT BE EMPTY";
        return;
      } else if (!this.username && !this.password){
        this.errorMessage = "FIELDS CANNOT BE EMPTY";
        return;
      }
    }

    this.errorMessage= '';
    this.username = '';
    this.password = '';

    console.log('submit');
  }
}
