import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentsPageComponent } from './assignments-page';
import { NewActivityPageComponent } from './new-activity-page';
import { EmployeesPageComponent } from './employees-page';
import { MainPageComponent } from './';

const ROUTES: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: AssignmentsPageComponent,
        outlet: 'assignments'
      },
      {
        path: 'new',
        component: NewActivityPageComponent,
        outlet: 'assignments'
      },
      {
        path: '',
        component: EmployeesPageComponent,
        outlet: 'employees'
      }
    ]
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
