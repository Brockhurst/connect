import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceCRUD, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { ApiSettings } from 'app/shared/services/api-settings';
import { ILesson } from 'app/shared/interfaces/lesson.interface';

interface IQueryInput {
  lessonId?: number;
  roomId?: string;
  userId?: number;
}

@Injectable()
@ResourceParams({
  url: `${ApiSettings.API_ENDPOINT}/lessons`
})
export class Lesson extends ResourceCRUD<IQueryInput, ILesson, ILesson> {
  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

  @ResourceAction({
    method: RequestMethod.Put
  })
  setRoomId: ResourceMethod<IQueryInput, ILesson>

  @ResourceAction({
    method: RequestMethod.Get
  })
  getCurrentLessons: ResourceMethod<IQueryInput, any>
}
