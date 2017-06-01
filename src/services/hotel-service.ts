import {Http} from '@angular/http';
import {Injectable} from "@angular/core";

import 'rxjs/Rx';

@Injectable()
export class HotelService {
  private hotels: any;
  private baseUrl: String;

  static get parameters() {
    return [[Http]];
  }

  constructor(private http: Http) {
    this.hotels = [];
    this.baseUrl = 'http://localhost:5000/';
  }

  getHotels() {
    var url = 'http://127.0.0.1:5000/hotels';
    return this.http.get(url).map(res => res.json());
  }

  getAll() {

    if (this.hotels.length > 0) {
      return Promise.resolve(this.hotels);
    }
    return new Promise(resolve => {
      this.getHotels().subscribe(response => {
        console.log(response.hotels);
        this.hotels = response.hotels;
        resolve(this.hotels);
      });
    });

  }

  getItem(id) {
    for (var i = 0; i < this.hotels.length; i++) {
      if (this.hotels[i].id === parseInt(id)) {
        return this.hotels[i];
      }
    }
    return null;
  }

  remove(item) {
    this.hotels.splice(this.hotels.indexOf(item), 1);
  }
}
