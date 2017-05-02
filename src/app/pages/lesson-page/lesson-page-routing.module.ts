import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LessonPageComponent } from './';

const ROUTES: Routes = [
  {
    path: 'lesson',
    component: LessonPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class LessonPageRoutingModule {
}
