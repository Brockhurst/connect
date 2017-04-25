import { Component } from '@angular/core';

import './assignments-bar.component.scss';

@Component({
  selector: 'ab-assignments-bar',
  host: { class: 'ab-assignments-bar' },
  templateUrl: './assignments-bar.component.html'
})
export class AssignmentsBarComponent {

  public links: Object[] = [
    { text: 'all', href: '#', active: true },
    { text: 'new', href: '#', active: false },
    { text: 'assigned', href: '#', active: false },
    { text: 'closed', href: '#', active: false },
  ];

}
