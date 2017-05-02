import { Component } from '@angular/core';

import { IUserShort } from 'app/shared/interfaces/user.interface';
import { User } from 'app/shared/services/resources/user';

import { currentUser } from 'app/shared/services/current-user.service';

import './friends-page.component.scss';

@Component({
  selector: 'cn-friends-page',
  host: { class: 'cn-friends-page' },
  templateUrl: 'friends-page.component.html'
})
export class FriendsPageComponent {
  public friends: IUserShort[];

  constructor(private userService: User) {
    this.friends = userService.getFriends({id: currentUser.id});
  }
}
