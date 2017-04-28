import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { IUser } from 'app/shared/interfaces/user.interface';
import { User } from 'app/shared/services/resources/user';

import './lessons-page.component.scss';

@Component({
  selector: 'lessons-page',
  host: { class: 'lessons-page' },
  templateUrl: 'lessons-page.component.html'
})
export class LessonsPageComponent {

  constructor(private userService: User, private route: ActivatedRoute, private router: Router) {

  }
}
