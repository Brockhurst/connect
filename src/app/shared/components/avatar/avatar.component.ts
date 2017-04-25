import { Component, Input } from '@angular/core';

import './avatar.component.scss';

@Component({
  selector: 'ab-avatar',
  host: { class: 'ab-avatar ab-avatar-prototype' },
  templateUrl: './avatar.component.html'
})
export class AvatarComponent {

  @Input() public fullName: string = '';
  @Input() public currentRole: string = '';
  @Input() public photoSrc: string = '';

}
