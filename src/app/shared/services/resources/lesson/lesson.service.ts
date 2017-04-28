import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceCRUD } from 'ng2-resource-rest';
import { Http } from '@angular/http';
import { ApiSettings } from 'app/shared/services/api-settings';
import { ILesson } from 'app/shared/interfaces/lesson.interface';

interface IQueryInput {}

@Injectable()
@ResourceParams({
  url: `${ApiSettings.API_ENDPOINT}/lessons`
})
export class Lesson extends ResourceCRUD<IQueryInput, ILesson, ILesson> {
  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }
}
