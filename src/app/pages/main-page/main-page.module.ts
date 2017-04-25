import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';

import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

import { ComponentsModule } from 'app/shared/components';

import { AssignmentsPageModule } from './assignments-page';
import { EmployeesPageModule } from './employees-page';
import { NewActivityPageModule } from './new-activity-page';

import { MainPageRoutingModule } from './main-page-routing.module';

import { AssignmentsBarComponent } from './assignments-bar';
import { EmployeesBarComponent } from './employees-bar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    CommonModule,
    MainPageRoutingModule,
    ComponentsModule,
    AssignmentsPageModule,
    EmployeesPageModule,
    NewActivityPageModule
  ],
  declarations: [
    MainPageComponent,
    AssignmentsBarComponent,
    EmployeesBarComponent
  ]
})
export class MainPageModule {
}
