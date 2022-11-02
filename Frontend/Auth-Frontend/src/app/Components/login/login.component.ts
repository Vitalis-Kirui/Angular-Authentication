import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // User details
  userLoginData: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  // Login user function
  loginUser(){
    console.log(this.userLoginData)
  };

}
