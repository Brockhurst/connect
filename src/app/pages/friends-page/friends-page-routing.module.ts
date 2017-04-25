import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FriendsPageComponent } from './';

const ROUTES: Routes = [
  {
    path: 'friends',
    component: FriendsPageComponent,
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
export class FriendsPageRoutingModule {
}
