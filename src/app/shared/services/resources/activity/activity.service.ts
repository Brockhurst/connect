import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceCRUD } from 'ng2-resource-rest';
import { Http } from '@angular/http';
import { ApiSettings } from 'app/shared/services/api-settings';
import { IActivity } from 'app/shared/interfaces/activity.interface';

interface IQueryInput {
  activity_id?: number;
}

@Injectable()
@ResourceParams({
  url: `${ApiSettings.API_ENDPOINT}/activities`
})
export class Activity extends ResourceCRUD<IQueryInput, IActivity, IActivity> {
  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }
}
