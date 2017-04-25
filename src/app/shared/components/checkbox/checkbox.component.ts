import { Component, Input } from '@angular/core';

import './checkbox.component.scss';

@Component({
  selector: 'ab-checkbox',
  host: { class: 'ab-checkbox' },
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {

  @Input() public checked: boolean = false;

}
