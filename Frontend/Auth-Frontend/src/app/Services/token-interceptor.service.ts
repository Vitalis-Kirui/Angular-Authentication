import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service  : AuthenticationService, private injector : Injector) { }

  // Intercept method
  intercept(req : any , next : any){
    let service2 = this.injector.get(AuthenticationService)
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${service2.getToken()}`
      }
    });

    return next.handle(tokenizedReq);

  };

}
