import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceCRUD } from 'ng2-resource-rest';
import { Http } from '@angular/http';
import { ApiSettings } from 'app/shared/services/api-settings';
import { IAssignment } from 'app/shared/interfaces/assignment.interface';

export interface IQueryInput {
  activity_id?: number;
}

@Injectable()
@ResourceParams({
  url: `${ApiSettings.API_ENDPOINT}/assignments`
})
export class Assignment extends ResourceCRUD<IQueryInput, IAssignment, IAssignment> {
  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }
}
