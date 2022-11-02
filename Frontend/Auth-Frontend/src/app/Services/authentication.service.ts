import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Register url
  private registerUrl = 'http://localhost:3000/api/register';

  constructor(private http : HttpClient) { }

  // Register user function
  registerUser(user : any){
    return this.http.post(this.registerUrl , user);
  }

}
