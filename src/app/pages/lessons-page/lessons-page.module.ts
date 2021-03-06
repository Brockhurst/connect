import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsPageComponent } from './lessons-page.component';

import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { CalendarComponent } from "ap-angular2-fullcalendar/src/calendar/calendar";

import { ComponentsModule } from 'app/shared/components';

import { LessonsPageRoutingModule } from './lessons-page-routing.module';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    CommonModule,
    LessonsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    LessonsPageComponent,
    CalendarComponent
  ]
})
export class LessonsPageModule {
}
