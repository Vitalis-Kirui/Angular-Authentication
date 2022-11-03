import { HttpErrorResponse } from '@angular/common/http';
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
  alreadyRegistered = false;

  constructor(private service : AuthenticationService) { }

  ngOnInit(): void {
  }

  // Register user function
  registerUser(){
    this.service.registerUser(this.registerUserData)
      .subscribe(
        res =>{
          this.userRegistered  = true;
          console.log(res);
          localStorage.setItem('token', res.token);
        },
        error =>{
          if(error instanceof HttpErrorResponse){
            if(error.status === 201){
              this.alreadyRegistered=true;
              console.log('User already registered');
            }
          }
        }
      )
  };

}
