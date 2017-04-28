import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUserShort } from 'app/shared/interfaces/user.interface';
import { User } from 'app/shared/services/resources/user';
import { Lesson } from 'app/shared/services/resources/lesson';
import { Router } from '@angular/router';

import { Modal } from 'angular2-modal/plugins/bootstrap';

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
  public startDateTime;
  public duration;

  public selectedCustomGenre = 0;
  public selectedCustomRoot = 0;

  constructor(private userService: User,
              private lessonService: Lesson,
              private route: ActivatedRoute,
              private modal: Modal,
              private router: Router) {
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

    if (this.topicSelected.id === id) {
      this.topicSelected.id = null;
    } else {
      this.topicSelected.id = id;
    }
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

  submitLesson(timingForm) {
    const isTopicSelected = !!(this.topicSelected.id || this.topicSelected.name);

    if (isTopicSelected && timingForm.valid) {
      this.lessonService.save({
        languageId: 2,
        startDateTime: this.startDateTime,
        duration: this.duration,
        userApprenticeId: this.assignee.id,
        userMasterId: 2
      }).$observable
        .subscribe(() => {
          let dialog = this.modal.confirm()
            .size('sm')
            .isBlocking(true)
            .keyboard(27)
            .title('Success')
            .body('Lesson submitted successfully! You can now view it in your lessons tab.')
            .open();

          dialog.then((resultPromise) => {
            return resultPromise.result.then(() => {
              this.router.navigate(['/lessons'])
            });
          });

        });
    }
  }
}
