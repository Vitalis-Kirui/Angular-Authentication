import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  // Regular events url
  private regularUrl = 'http://localhost:3000/api/events/regular';

    // Special events url
    private specialUrl = 'http://localhost:3000/api/events/special';

  constructor(private http  : HttpClient) { }

  // Fetching regular events
  regularEvents(){
    return this.http.get<any>(this.regularUrl);
  };

  // Fetching special events
  specialEvents(){
    return this.http.get<any>(this.specialUrl);
  };

}
