import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartnersPageComponent } from './';

const ROUTES: Routes = [
  {
    path: 'partners',
    component: PartnersPageComponent
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
export class PartnersPageRoutingModule {
}
