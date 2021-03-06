import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './';

const ROUTES: Routes = [
  {
    path: 'main',
    component: MainPageComponent
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
export class MainPageRoutingModule {
}
