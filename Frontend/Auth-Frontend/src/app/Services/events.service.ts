import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  // Regular events url
  private regularUrl = 'http://localhost:3000/api/events/regular';

  constructor(private http  : HttpClient) { }

  // Fetching regular events
  regularEvents(){
    return this.http.get<any>(this.regularUrl);
  };

}
