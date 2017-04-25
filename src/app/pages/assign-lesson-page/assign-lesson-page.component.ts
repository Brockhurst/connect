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
  public rootTopics;
  public genreTopics;
  public subjectTopics;
  public languageSelected: boolean;

  constructor(private userService: User, private route: ActivatedRoute) {
    const id =  this.route.snapshot.params['id'];

    this.assignee = userService.get({id});
    this.lessons = ['English', 'Russian'];
    this.rootTopics = [
      { "id": 1, "recommended": false, "relevant": false, "url": null, name: "Watch a movie" },
      { "id": 2, "recommended": false, "relevant": false, "url": null, name: "Watch a movie" },
      { "id": 3, "recommended": false, "relevant": false, "url": null, name: "Watch a movie" },
      { "id": 4, "recommended": false, "relevant": false, "url": null, name: "Watch a movie" }
    ];
  }

  onLanguageSelect() {
    this.languageSelected = true;
  }

  onCustomTopicSelect(e) {
    console.log(e);
  }

  onTopicSelect(id) {
    if (!this.genreTopics) {
      //TODO: GO TO THE SERVER FOR GENRE
      this.genreTopics = [
        { "id": 5, "name": "Horror", "recommended": false, "relevant": false, "url": null }
      ];

      return;
    }

    //TODO: GO TO THE SERVER FOR SUBJECT
    this.subjectTopics = [
      { "id": 6, "name": "Silent Hill", "recommended": true, "relevant": false, "imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Silent_Hill_film_poster.jpg/220px-Silent_Hill_film_poster.jpg" }
    ]
  }

  goBack() {
    if (this.subjectTopics) {
      this.subjectTopics = null;

      return;
    }

    if (this.genreTopics) {
      this.genreTopics = null;
    }
  }
}
