import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Login } from '../Login';
import { Injectable } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { LOGIN } from '../mock-logins';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoginFormComponent implements OnInit {
  username = '';
  password = '';
  errorMessage= '';
  
  constructor(private router:Router) {}

  ngOnInit(): void {}

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

    
    LOGIN.forEach((el) => {
      // if username & password correct -> index page html
      if(this.username === el.username && this.password === el.password){
        this.router.navigate(['/index']);
        throw stop;
      }})
    // if incorrect -> alert & direct to 404 page
    this.router.navigate(['/error'])
    console.log('incorrect password')

  }
}
