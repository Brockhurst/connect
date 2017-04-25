import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'app/shared/components';
import { ActivityComponent } from './activity';
import { NewActivityPageComponent } from './new-activity-page.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    ActivityComponent,
    NewActivityPageComponent
  ]
})
export class NewActivityPageModule {
}
