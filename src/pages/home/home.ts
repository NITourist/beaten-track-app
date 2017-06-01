import {Component} from "@angular/core";
import {App, NavController} from "ionic-angular";
import {GatewayService} from "../../services/gateway-service";
import {HotelService} from "../../services/hotel-service";
import {RestaurantService} from "../../services/restaurant-service";
import {AttractionService} from "../../services/attraction-service";
import {RestaurantDetailPage} from "../restaurant-detail/restaurant-detail";
import {HotelDetailPage} from "../hotel-detail/hotel-detail";
import {RestaurantsPage} from "../restaurants/restaurants";
import {HotelsPage} from "../hotels/hotels";
import {AttractionsPage} from "../attractions/attractions";
import {MovieService} from '../../services/movie-service';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MovieService]
})
export class HomePage {
  // restaurants
  public restaurants: any;
  // hotels
  public hotels: Array<any>;
  // attractions
  public attractions: any;

  movies: Array<any>;

  constructor(public app: App, public nav: NavController, public gatewayService: GatewayService,
              public hotelService: HotelService, public restaurantService: RestaurantService,
              public attractionService: AttractionService, private movieService: MovieService) {
    // set sample data
    this.restaurants = restaurantService.getAll();
    hotelService.getAll().then(data => {
      this.hotels = data;
    });
    this.attractions = attractionService.getAll();

    // this.movies = searchMovieDB();
  }

  searchMovieDB() {
      this.movieService.searchMovies('batman').subscribe(
        data => {
          this.movies = data.results;
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
      );

  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // view restaurant detail
  viewRestaurant(id) {
    this.app.getRootNav().push(RestaurantDetailPage, {id: id})
  }

  // view hotel detail
  viewHotel(id) {
    this.app.getRootNav().push(HotelDetailPage, {id: id})
  }

  // view attraction detail
  viewAttraction(id) {
    this.app.getRootNav().push(AttractionsPage, {id: id})
  }

  // view all restaurants
  viewAllRestaurants() {
    this.app.getRootNav().push(RestaurantsPage);
  }

  // view all hotels
  viewAllHotels() {
    this.app.getRootNav().push(HotelsPage);
  }

  // view all restaurants
  viewAllAttractions() {
    this.app.getRootNav().push(AttractionsPage);
  }
}
