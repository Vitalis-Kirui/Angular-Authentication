import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Data storage
  registerUserData : any = {}

  userRegistered = false;

  constructor(private service : AuthenticationService) { }

  ngOnInit(): void {
  }

  // Register user function
  registerUser(){
    this.userRegistered  = true;
    this.service.registerUser(this.registerUserData)
      .subscribe(
        res =>{
          console.log(res);
          localStorage.setItem('token', res.token);
        },
        error =>{
          console.log(error)
        }
      )
  };

}
