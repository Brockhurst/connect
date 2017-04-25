import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignLessonPageComponent } from './assign-lesson-page.component';

import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

import { ComponentsModule } from 'app/shared/components';

import { AssignLessonPageRoutingModule } from './assign-lesson-page-routing.module';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    CommonModule,
    AssignLessonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    AssignLessonPageComponent
  ]
})
export class AssignLessonPageModule {
}
