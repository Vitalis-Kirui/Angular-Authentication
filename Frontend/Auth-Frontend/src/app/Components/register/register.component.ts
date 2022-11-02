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

  constructor(private service : AuthenticationService) { }

  ngOnInit(): void {
  }

  // Register user function
  registerUser(){
    this.service.registerUser(this.registerUserData)
      .subscribe(
        res =>{
          console.log(res);
        },
        error =>{
          console.log(error)
        }
      )
  };

}
