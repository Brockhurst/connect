import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceCRUD, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http } from '@angular/http';
import { ApiSettings } from 'app/shared/services/api-settings-rud';
import { ITopic } from 'app/shared/interfaces/topic.interface';

interface IQueryInput {}

@Injectable()
@ResourceParams({
  url: `${ApiSettings.API_ENDPOINT}/topics`
})
export class Topic extends ResourceCRUD<IQueryInput, ITopic, ITopic> {
  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

  @ResourceAction({
    isArray: true,
    path: '/root'
  })
  getRoot: ResourceMethod<IQueryInput, ITopic[]>

  @ResourceAction({
    isArray: true,
    path: '/{!id}/children'
  })
  getChildren: ResourceMethod<{id: any}, ITopic[]>
}
