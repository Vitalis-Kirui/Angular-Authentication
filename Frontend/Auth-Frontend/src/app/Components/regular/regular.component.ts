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
          this.events = res;
        },
        error=>{
          console.log(error);
        }
      )

  }

}
