import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  // special events array
  events : any = [];

  constructor(private service : EventsService) { }

  ngOnInit() {

    this.service.specialEvents()
        .subscribe(
          res =>{
            this.events = res;
          },
          error =>{
            console.log(error);
          }
        )

  }

}
