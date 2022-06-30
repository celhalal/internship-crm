import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LOGIN } from '../mock-logins';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  newUser = '';
  newPass = '';
  show: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {}

  usernameInput(username: string){
    this.newUser = username;
  }

  passwordInput(password:string){
    this.newPass = password;
  }

  register(){
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

    LOGIN.push({username: this.newUser, password:this.newPass});
    alert('Registration successfull')
    this.newUser = '';
    this.newPass = '';
    this.router.navigate([''])
  }

  togglePass(){
    this.show = !this.show;
  }

}
