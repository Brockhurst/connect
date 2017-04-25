import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceCRUD } from 'ng2-resource-rest';
import { Http } from '@angular/http';
import { ApiSettings } from 'app/shared/services/api-settings-rud';
import { IEmployee } from 'app/shared/interfaces/employee.interface';

interface IQueryInput {}

@Injectable()
@ResourceParams({
  url: `${ApiSettings.API_ENDPOINT}/employees`
})
export class Employee extends ResourceCRUD<IQueryInput, IEmployee, IEmployee> {
  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }
}
