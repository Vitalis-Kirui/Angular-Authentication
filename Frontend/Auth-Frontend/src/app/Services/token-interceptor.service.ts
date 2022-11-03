import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service : AuthenticationService, private injector : Injector) { }

  // Intercept method
  intercept(req : any , next : any){
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${this.service.getToken()}`
      }
    });

    return next.handle(tokenizedReq)

  };

  // Method 2 to intercept bearer token
  // intercept(req : any, next : any){
  //   let service2 = this.injector.get(AuthenticationService)
  //   let request = req.clone({
  //     setHeaders : {
  //       Authorization2 : `Bearer ${service2.getToken()}`
  //     }
  //   });

  //   return next.handle(request)

  // };

}
