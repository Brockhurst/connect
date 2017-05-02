import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersPageComponent } from './partners-page.component';

import { CarouselModule } from 'ngx-bootstrap';

import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

import { ComponentsModule } from 'app/shared/components';

import { PartnersPageRoutingModule } from './partners-page-routing.module';


const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    CommonModule,
    PartnersPageRoutingModule,
    ComponentsModule,
    CarouselModule
  ],
  declarations: [
    PartnersPageComponent
  ]
})
export class PartnersPageModule {
}
