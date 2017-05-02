import { Component, ViewChild, NgZone, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CalendarComponent } from "ap-angular2-fullcalendar/src/calendar/calendar";
import * as $ from 'jquery'

import { Lesson } from 'app/shared/services/resources/lesson';
import { User } from 'app/shared/services/resources/user';

import { currentUser } from 'app/shared/services/current-user.service';

import './lessons-page.component.scss';

@Component({
  selector: 'lessons-page',
  host: { class: 'lessons-page' },
  templateUrl: 'lessons-page.component.html'
})
export class LessonsPageComponent {

  @ViewChild('myCal', { read: ElementRef }) myCal: ElementRef;

  options = {
    fixedWeekCount : false,
    eventLimit: true,
    events: []
  };
  events;

  constructor(private lessonService: Lesson, private usersService: User, private zone: NgZone) {
    this.getConfig();
  }

  getConfig() {
    this.lessonService.getCurrentLessons({userId: currentUser.id}).$observable.subscribe(data => {
      this.options.events = data.apprenticeLessons.map((lesson) => {
        return {
          title: 'Lesson',
          start: lesson.startDateTime
        }
      });

      $(this.myCal.nativeElement).fullCalendar('addEventSource', this.options.events);
    });
  }
}
