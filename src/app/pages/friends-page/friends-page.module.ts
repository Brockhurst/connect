import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsPageComponent } from './friends-page.component';

import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

import { ComponentsModule } from 'app/shared/components';

import { FriendsPageRoutingModule } from './friends-page-routing.module';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    CommonModule,
    FriendsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    FriendsPageComponent
  ]
})
export class FriendsPageModule {
}
