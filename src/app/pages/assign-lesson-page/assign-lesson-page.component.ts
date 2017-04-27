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
  public topicSelected;

  public selectedCustomGenre = 0;
  public selectedCustomRoot = 0;

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
    this.topicSelected = {};
  }

  onLanguageSelect() {
    this.languageSelected = true;
  }

  onTopicSelect(id) {
    if (!id) {
      id = this.selectedCustomGenre || this.selectedCustomRoot;
    }

    if (!this.genreTopics) {
      this.topicSelected.root = id;
      //TODO: GO TO THE SERVER FOR GENRE
      this.genreTopics = [
        { "id": 5, "name": "Horror", "recommended": false, "relevant": false, "url": null }
      ];

      return;
    }

    if (!this.subjectTopics) {
      this.topicSelected.genre = id;
      //TODO: GO TO THE SERVER FOR SUBJECT
      this.subjectTopics = [
        { "id": 6, "name": "Silent Hill", "recommended": true, "relevant": false, "imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Silent_Hill_film_poster.jpg/220px-Silent_Hill_film_poster.jpg" }
      ];

      return;
    }

    this.topicSelected.id = id;
  }

  goBack() {
    if (this.subjectTopics) {
      this.subjectTopics = null;
      this.topicSelected.genre = null;
      this.topicSelected.id = null;

      return;
    }

    if (this.genreTopics) {
      this.topicSelected.root = null;
      this.genreTopics = null;
    }
  }
}
