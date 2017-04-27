import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignLessonPageComponent } from './assign-lesson-page.component';

import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

import { ComponentsModule } from 'app/shared/components';
import { FormsModule } from '@angular/forms';

import { AssignLessonPageRoutingModule } from './assign-lesson-page-routing.module';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    NguiDatetimePickerModule,
    CommonModule,
    FormsModule,
    AssignLessonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    AssignLessonPageComponent
  ]
})
export class AssignLessonPageModule {
}
