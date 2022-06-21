import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Login } from '../Login';
import { Injectable } from '@angular/core';
import { JSONPlaceholderService } from '../../app/services/jsonplaceholder.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoginFormComponent implements OnInit {
  
  constructor(private router:Router) {
  }

  ngOnInit(): void {}


  username = '';
  password = '';
  errorMessage= '';
  users: Login[] | undefined;

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

    // once signed it -> index page html
    this.router.navigate(['/index'])

    // goes to 404 html page
    // this.router.navigate(['/error'])

    // this.getDataFromApi();
  }

}
