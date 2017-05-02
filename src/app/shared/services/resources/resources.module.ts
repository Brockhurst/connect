import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { User }       from './user';
import { Lesson }     from './lesson';
import { Language }   from './language';
import { Topic }   from './topic';

const resources = [
  User,
  Lesson,
  Language,
  Topic
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: resources
})
export class ResourcesModule {}
