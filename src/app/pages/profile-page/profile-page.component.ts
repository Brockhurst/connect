import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { IUser } from 'app/shared/interfaces/user.interface';
import { User } from 'app/shared/services/resources/user';

import './profile-page.component.scss';

@Component({
  selector: 'cn-profile-page',
  host: { class: 'cn-profile-page' },
  templateUrl: 'profile-page.component.html'
})
export class ProfilePageComponent {
  public user: IUser;
  public isSelf: boolean;

  constructor(private userService: User, private route: ActivatedRoute, private router: Router) {
    this.init();

    router.events.subscribe(val => {
      if (val instanceof NavigationEnd && val.url && val.url.includes('profile')) {
        this.init();
      }
    });
  }

  init() {
    let id =  this.route.snapshot.params['id'];

    if (id === 'me') {
      this.isSelf = true;
      id = 1; //TODO: add authentification
    }

    this.user = this.userService.get({id});
  }
}
