import { Component, Input } from '@angular/core';
import { IUserShort } from 'app/shared/interfaces/user.interface';
import './friend.component.scss';

@Component({
  selector: 'cn-friend',
  host: { class: 'cn-friend' },
  templateUrl: 'friend.component.html'
})
export class FriendComponent {
  @Input() public friend: IUserShort;
}
