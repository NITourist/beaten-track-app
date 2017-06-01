import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

// import {Api} from './api';

//
// @Injectable()
// export class Items {
//
//   constructor(public http: Http, public api: Api) {
//   }
//
//   getHotels(params?: any) {
//     return this.api.get('/hotels', params)
//       .map(resp => resp.json());
//   }
//
// }

@Injectable()
export class Hotels {
  http: any;
  baseUrl: String;

  constructor(http: Http) {
    this.http = http;
    this.baseUrl = 'http://localhost:5000';
  }

  getHotels() {
    return this.http.get(this.baseUrl + '/hotels')
      .map(res => res.json());
  }
}
