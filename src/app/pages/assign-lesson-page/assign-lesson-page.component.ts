import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUserShort } from 'app/shared/interfaces/user.interface';
import { User } from 'app/shared/services/resources/user';
import { Lesson } from 'app/shared/services/resources/lesson';
import { Topic } from 'app/shared/services/resources/topic';
import { Language } from 'app/shared/services/resources/language';
import { Router } from '@angular/router';

import { currentUser } from 'app/shared/services/current-user.service';

import { Modal } from 'angular2-modal/plugins/bootstrap';

import './assign-lesson-page.component.scss';

@Component({
  selector: 'cn-assign-lesson-page',
  host: { class: 'cn-assign-lesson-page' },
  templateUrl: 'assign-lesson-page.component.html'
})
export class AssignLessonPageComponent {
  public assignee;
  public languages;

  public isTopicLoading = true;
  public isUserLoading = true;

  public rootTopics;
  public genreTopics;
  public subjectTopics;

  public selectedLanguage = 0;
  public topicSelected;
  public startDateTime;
  public duration;

  public selectedCustomGenre = 0;
  public selectedCustomRoot = 0;

  public customSourceUrl: string;
  public customImageUrl: string;

  constructor(private userService: User,
              private lessonService: Lesson,
              private languageService: Language,
              private topicService: Topic,
              private route: ActivatedRoute,
              private modal: Modal,
              private router: Router) {
    const id =  this.route.snapshot.params['id'];

    this.assignee = userService.get({id});

    this.assignee.$observable.subscribe(() => {
      this.isUserLoading = false;
    });

    this.languages = languageService.query();

    this.rootTopics = topicService.getRoot({});
    this.rootTopics.$observable.subscribe(() => {
      this.isTopicLoading = false;
    });

    this.topicSelected = {};
  }

  onTopicSelect(id) {
    if (!id) {
      id = this.selectedCustomGenre || this.selectedCustomRoot;
    }

    if (!this.genreTopics) {
      this.isTopicLoading = true;
      this.topicSelected.root = id;
      this.genreTopics = this.topicService.getChildren({id});
      this.genreTopics.$observable.subscribe(() => {
        this.isTopicLoading = false;
      });

      return;
    }

    if (!this.subjectTopics) {
      this.isTopicLoading = true;
      this.topicSelected.genre = id;
      this.subjectTopics = this.topicService.getChildren({id});
      this.subjectTopics.$observable.subscribe(() => {
        this.isTopicLoading = false;
      });

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
    if (!timingForm.valid) {
      return;
    }

    if (this.topicSelected.name) {
      this.topicService.save({
        name: this.topicSelected.name,
        parentId: this.topicSelected.genre,
        recommended: false,
        relevant: false,
        imageUrl: this.customImageUrl,
        sourceUrl: this.customSourceUrl
      }).$observable.subscribe(data => {
        this.saveLesson(data.id);
      })
    } else if (this.topicSelected.id) {
      this.saveLesson(this.topicSelected.id);
    }
  }

  saveLesson(topicId) {
    this.lessonService.save({
      languageId: this.selectedLanguage,
      startDateTime: this.startDateTime,
      duration: this.duration,
      userApprenticeId: this.assignee.id,
      userMasterId: currentUser.id,
      topicId
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
