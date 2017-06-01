import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class MovieService {
  static get parameters() {
    return [[Http]];
  }

  constructor(private http:Http) {

  }

  searchMovies(movieName) {
    var url = 'http://127.0.0.1:5000/hotels';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
