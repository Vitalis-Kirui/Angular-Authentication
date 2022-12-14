import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private service : AuthenticationService, private router : Router){};

  canActivate() : any {

    if(this.service.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
