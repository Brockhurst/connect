import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LessonPageComponent } from './lesson-page.component';
import { LessonPageRoutingModule } from './lesson-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LessonPageRoutingModule,
    FormsModule
  ],
  declarations: [
    LessonPageComponent
  ]
})
export class LessonPageModule {
}
