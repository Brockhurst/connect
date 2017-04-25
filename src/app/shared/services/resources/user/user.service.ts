import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceCRUD } from 'ng2-resource-rest';
import { Http } from '@angular/http';
import { ApiSettings } from 'app/shared/services/api-settings';
import { IUser } from 'app/shared/interfaces/user.interface';

interface IQueryInput {}

@Injectable()
@ResourceParams({
  url: `${ApiSettings.API_ENDPOINT}/users`
})
export class User extends ResourceCRUD<IQueryInput, IUser, IUser> {
  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }
}
