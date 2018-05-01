import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsPage } from './tabs/tabs';
import { TabsPageModule } from './tabs/tabsPage.module';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [],
	imports: [IonicPageModule,
		CommonModule,
		TabsPageModule
	],
	exports: [TabsPage]
})
export class ComponentsModule {}
