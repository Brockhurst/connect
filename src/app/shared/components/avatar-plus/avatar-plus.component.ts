import { Component, Input } from '@angular/core';

import './avatar-plus.component.scss';

@Component({
  selector: 'ab-avatar-plus',
  host: { class: 'ab-avatar-plus ab-avatar-prototype' },
  templateUrl: './avatar-plus.component.html'
})
export class AvatarPlusComponent {

  @Input() public currentRole: string = '';
  @Input() public type: string = '';

}
