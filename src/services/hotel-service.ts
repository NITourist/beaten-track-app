import {Injectable} from "@angular/core";
import {HOTELS} from "./mock-hotels";


import 'rxjs/Rx';

@Injectable()
export class HotelService {
  private hotels: any;
  private items: any;
  http: any;
  baseUrl: String;

  constructor() {
    this.hotels = HOTELS;
    this.items = [];
    this.baseUrl = 'http://localhost:5000/';
  }

  getAll() {
    return this.hotels;
  }

  // getAll(category: string, limit: number) {
  //   this.redditService.getPosts(category, limit).subscribe(response =>  {
  //     this.items = response.data.children;
  //   });
  // }

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
