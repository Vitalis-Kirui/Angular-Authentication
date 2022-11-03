import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  // special events array
  events : any = [];

  constructor(private service : EventsService, private router : Router) { }

  ngOnInit() {

    this.service.specialEvents()
        .subscribe(
          res =>{
            this.events = res;
          },
          error =>{
            if(error instanceof HttpErrorResponse){
              if(error.status === 401){
                this.router.navigate(['/login']);
              }
              if(error.status ===500){
                console.log('Invalid token')
                this.router.navigate(['/login']);
              }
            }
          }
        )

  }

}
