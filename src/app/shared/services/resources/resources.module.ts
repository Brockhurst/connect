import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { Assignment } from './assignment';
import { Activity }   from './activity';
import { Employee }   from './employee';
import { User }       from './user';

const resources = [
  Assignment,
  Activity,
  Employee,
  User
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: resources
})
export class ResourcesModule {}
