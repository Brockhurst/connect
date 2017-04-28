import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { Assignment } from './assignment';
import { Activity }   from './activity';
import { Employee }   from './employee';
import { User }       from './user';
import { Lesson }       from './lesson';

const resources = [
  Assignment,
  Activity,
  Employee,
  User,
  Lesson
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: resources
})
export class ResourcesModule {}
