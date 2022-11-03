import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { RegularComponent } from './Components/regular/regular.component';
import { SpecialComponent } from './Components/special/special.component';
import { Error404Component } from './Components/error404/error404.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './Services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    RegularComponent,
    SpecialComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService, 
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
