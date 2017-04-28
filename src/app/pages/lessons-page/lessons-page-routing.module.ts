import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LessonsPageComponent } from './';

const ROUTES: Routes = [
  {
    path: 'lessons',
    component: LessonsPageComponent,
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
export class LessonsPageRoutingModule {
}
