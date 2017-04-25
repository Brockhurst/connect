import { Component, Input } from '@angular/core';

import './actions.component.scss';

@Component({
  selector: 'ab-actions',
  host: { class: 'ab-actions' },
  templateUrl: './actions.component.html'
})
export class ActionsComponent {

  @Input() public actionClassName: string = '';

}
