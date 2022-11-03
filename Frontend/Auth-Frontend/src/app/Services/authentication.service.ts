import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Register url
  private registerUrl = 'http://localhost:3000/api/register';

  // Logine url
  private loginUrl = 'http://localhost:3000/api/login';


  constructor(private http : HttpClient, private router : Router) { }

  // Register user function
  registerUser(user : any){
    return this.http.post<any>(this.registerUrl , user);
  }

  // Login user function
  loginUser(user : any){
    return this.http.post<any>(this.loginUrl, user);
  };

  // Logging out users
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/events/regular']);
  };

  // Logged in function for auth guard
  loggedIn(){
    return !!localStorage.getItem('token');
  };

  // Getting token for interceptor
  getToken(){
    return localStorage.getItem('token');
  };

}
