import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'app/shared/components';
import { AssignmentsComponent } from './assignments';
import { AssignmentComponent } from './assignment';
import { AssignmentsPageComponent } from './assignments-page.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    AssignmentComponent,
    AssignmentsComponent,
    AssignmentsPageComponent
  ]
})
export class AssignmentsPageModule {
}
