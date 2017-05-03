import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceCRUD, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http } from '@angular/http';
import { ApiSettings } from 'app/shared/services/api-settings';
import { IUser, IUserShort } from 'app/shared/interfaces/user.interface';

interface IQueryInput {}

@Injectable()
@ResourceParams({
  url: `${ApiSettings.API_ENDPOINT}/users`
})
export class User extends ResourceCRUD<IQueryInput, IUser, IUser> {
  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

  @ResourceAction({
    isArray: true,
    path: '/{!id}/friends'
  })
  getFriends: ResourceMethod<{id: any}, IUserShort[]>;

  @ResourceAction({
    isArray: true,
    path: '/{!id}/search'
  })
  search: ResourceMethod<{id: any, level, languageId}, IUserShort[]>
}
