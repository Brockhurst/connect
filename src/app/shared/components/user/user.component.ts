import { Component, Input } from '@angular/core';
import { IUserShort } from 'app/shared/interfaces/user.interface';
import './user.component.scss';

@Component({
  selector: 'cn-user',
  host: { class: 'cn-user' },
  templateUrl: 'user.component.html'
})
export class UserComponent {
  @Input() public user: IUserShort;
  @Input() public isFriend: boolean;
}
