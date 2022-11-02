import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './Components/error404/error404.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { RegularComponent } from './Components/regular/regular.component';
import { SpecialComponent } from './Components/special/special.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path: 'events/regular',
    component : RegularComponent
  },
  {
    path: 'events/special',
    component : SpecialComponent,
    canActivate : [AuthGuard]
  },
  {
    path :'register',
    component :RegisterComponent
  },
  {
    path :'login',
    component : LoginComponent
  },
  {
    path :'',
    redirectTo :'events/regular',
    pathMatch :'full'
  },
  {
    path :'home',
    redirectTo:'events/regular',
    pathMatch : 'full'
  },
  {
    path:'**',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
