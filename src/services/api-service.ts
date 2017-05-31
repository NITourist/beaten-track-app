import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class APIService {
  http: any;
  baseUrl: String;

  constructor(http: Http) {
    this.http = http;
    this.baseUrl = 'http:/localhost:5000/api/v1';
  }

  getHotels() {
    return this.http.get(this.baseUrl + '/hotels')
      .map(res => res.json());
  }
}
