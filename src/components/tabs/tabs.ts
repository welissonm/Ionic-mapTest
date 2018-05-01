import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
// import { AboutPage } from '../../pages/about/about';
// import { ContactPage } from '../../pages/contact/contact';
// import { ExplorePage } from '../../pages/explore/explore';

// @IonicPage({name:'tabs'})
@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root;
  tab2Root;
  tab3Root;
  tab4Root;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1Root = HomePage;
    // this.tab2Root = AboutPage;
    // this.tab3Root = ContactPage;
    // this.tab4Root = ExplorePage;
  }
}
