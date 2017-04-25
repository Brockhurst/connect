import { Component } from '@angular/core';

import './employees-bar.component.scss';

@Component({
  selector: 'ab-employees-bar',
  host: { class: 'ab-employees-bar' },
  templateUrl: './employees-bar.component.html'
})
export class EmployeesBarComponent {

  public links: Array<{ href: string, text: string, active: boolean }> = [
    { text: 'all', href: '#', active: true },
    { text: 'free', href: '#', active: false },
    { text: 'busy', href: '#', active: false }
  ];

}
