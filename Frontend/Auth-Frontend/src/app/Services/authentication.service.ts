import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Register url
  private registerUrl = 'http://localhost:3000/api/register';

  // Logine url
  private loginUrl = 'http://localhost:3000/api/login';


  constructor(private http : HttpClient) { }

  // Register user function
  registerUser(user : any){
    return this.http.post(this.registerUrl , user);
  }

  // Login user function
  loginUser(user : any){
    return this.http.post(this.loginUrl, user);
  };

}
