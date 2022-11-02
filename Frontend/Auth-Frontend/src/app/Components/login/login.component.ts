import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // User details
  userLoginData: any = {};

  constructor(private service : AuthenticationService, private router : Router) { }

  ngOnInit(): void {
  }

  // Login user function
  loginUser(){
    this.service.loginUser(this.userLoginData)
      .subscribe(
        res =>{
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/events/special'])
        },
        error =>{
          console.log(error);
        }
      )
  };

}
