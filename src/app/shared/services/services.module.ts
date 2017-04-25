import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ResourcesModule } from './resources';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ResourcesModule
  ]
})
export class ServicesModule {}
