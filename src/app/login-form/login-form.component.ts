import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private router:Router) { }

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
      } else if (this.username && !this.password){
        this.errorMessage = "PASSWORD CANNOT BE EMPTY";
      } else if (!this.username && !this.password){
        this.errorMessage = "FIELDS CANNOT BE EMPTY";
      }
      return;
    }

    this.errorMessage= '';
    this.username = '';
    this.password = '';
    this.router.navigate(['/error'])
  }
}
