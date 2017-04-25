import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageComponent } from './';

const ROUTES: Routes = [
  {
    path: 'profile/:id',
    component: ProfilePageComponent,
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
export class ProfilePageRoutingModule {
}
