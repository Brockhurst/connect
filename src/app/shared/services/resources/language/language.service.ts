import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceCRUD, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http } from '@angular/http';
import { ApiSettings } from 'app/shared/services/api-settings';
import { ILanguage } from 'app/shared/interfaces/language.interface';

interface IQueryInput {
  search?;
}

@Injectable()
@ResourceParams({
  url: `${ApiSettings.API_ENDPOINT}/languages`
})
export class Language extends ResourceCRUD<IQueryInput, ILanguage, ILanguage> {
  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

  @ResourceAction({
    isArray: true,
    path: '/simplest'
  })
  getSimplest: ResourceMethod<IQueryInput, ILanguage[]>
}
