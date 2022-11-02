import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.css']
})
export class RegularComponent implements OnInit {

  // Events array
  events : any = [];

  constructor(private service : EventsService) { }

  ngOnInit() {

    this.service.regularEvents()
      .subscribe(
        res =>{
          res = this.events;
        },
        error=>{
          console.log(error);
        }
      )

  }

}
