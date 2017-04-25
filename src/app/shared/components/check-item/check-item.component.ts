import { Component, Input } from '@angular/core';

import './check-item.component.scss';

@Component({
  selector: 'ab-check-item',
  host: { class: 'ab-check-item' },
  templateUrl: './check-item.component.html'
})
export class CheckItemComponent {

  @Input() public checked: boolean = false;
  @Input() public type: string = '';
  @Input() public count: number;
  @Input() public updateCount: number = 0;
  @Input() public typeClassName: string = '';

}
