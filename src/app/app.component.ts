import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';

// import pages
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {SearchPage} from '../pages/search/search';
import {ActivityPage} from '../pages/activity/activity';

// end import pages

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {

  public rootPage: any;

  public nav: any;

  public pages = [
    {
      title: 'Near By',
      count: 0,
      component: MainTabsPage
    },

    {
      title: 'Search',
      count: 0,
      component: SearchPage
    },

    {
      title: 'Tours',
      count: 0,
      component: ActivityPage
    }

    // import menu


  ];

  constructor(public platform: Platform) {
    this.rootPage = MainTabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
