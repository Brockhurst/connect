import { Component } from '@angular/core';
import { IEmployee } from 'app/shared/interfaces/employee.interface';
import { Employee } from 'app/shared/services/resources/employee';
import './employees.component.scss';

@Component({
  selector: 'ab-employees',
  host: {class: 'ab-employees'},
  templateUrl: './employees.component.html'
})
export class EmployeesComponent {
  public employees: IEmployee[];

  constructor(private employeeService: Employee) {
    this.employees = employeeService.query();
  }
}
