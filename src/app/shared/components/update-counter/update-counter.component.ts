import { Component, Input } from '@angular/core';

import './update-counter.component.scss';

@Component({
  selector: 'ab-update-counter',
  host: {
    'class': 'ab-update-counter',
    '[class.ab-update-counter_hidden]': 'number <= 0'
  },
  templateUrl: './update-counter.component.html'
})
export class UpdateCounterComponent {

  @Input() public number: number = 0;

}
