import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUserShort } from 'app/shared/interfaces/user.interface';
import { User } from 'app/shared/services/resources/user';

import './assign-lesson-page.component.scss';

@Component({
  selector: 'cn-assign-lesson-page',
  host: { class: 'cn-assign-lesson-page' },
  templateUrl: 'assign-lesson-page.component.html'
})
export class AssignLessonPageComponent {
  public assignee: IUserShort;
  public lessons: String[];
  public languageSelected: boolean;

  constructor(private userService: User, private route: ActivatedRoute) {
    const id =  this.route.snapshot.params['id'];

    this.assignee = userService.get({id});
    this.lessons = ['English', 'Russian'];
  }

  onLanguageSelect() {
    this.languageSelected = true;
  }
}
