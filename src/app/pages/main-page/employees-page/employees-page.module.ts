import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'app/shared/components';
import { EmployeesPageComponent } from './employees-page.component';

import { EmployeesComponent } from './employees';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeesPageComponent
  ]
})
export class EmployeesPageModule {
}
