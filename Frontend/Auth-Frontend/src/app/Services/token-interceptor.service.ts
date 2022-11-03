import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service : AuthenticationService) { }

  // Intercept method
  intercept(req : any , next : any){
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${this.service.getToken()}`
      }
    });

    return next.handle(tokenizedReq)

  };

}
