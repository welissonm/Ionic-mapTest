import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';
import { ExplorePage } from './explore/explore';
import { HomePage } from './home/home';
import { HomePageModule } from './home/home.module';

@NgModule({
  declarations: [
    AboutPage,
    ContactPage,
    ExplorePage,
  ],
  imports: [
    IonicPageModule,
    CommonModule,
    HomePageModule
  ],
  exports: [
    AboutPage,
    ContactPage,
    ExplorePage,
    HomePage
  ]
})
export class PagesModule {}
