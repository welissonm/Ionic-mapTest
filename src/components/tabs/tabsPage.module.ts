import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { TabsPage } from './tabs';
import { HomePageModule } from '../../pages/home/home.module';
// import { PagesModule } from '../../pages/pages.module';

@NgModule({
	declarations: [TabsPage],
	imports: [
		IonicPageModule,
		CommonModule,
		HomePageModule
		// PagesModule
	],
	exports: [TabsPage]
})
export class TabsPageModule {}
