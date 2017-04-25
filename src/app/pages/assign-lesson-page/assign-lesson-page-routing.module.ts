import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignLessonPageComponent } from './';

const ROUTES: Routes = [
  {
    path: 'assign/:id',
    component: AssignLessonPageComponent,
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
export class AssignLessonPageRoutingModule {
}
