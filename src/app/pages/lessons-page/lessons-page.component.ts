import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CalendarComponent } from "ap-angular2-fullcalendar/src/calendar/calendar";

import { Lesson } from 'app/shared/services/resources/lesson';
import { User } from 'app/shared/services/resources/user';

import './lessons-page.component.scss';
// import "fullcalendar/dist/fullcalendar.min.css";

@Component({
  selector: 'lessons-page',
  host: { class: 'lessons-page' },
  templateUrl: 'lessons-page.component.html'
})
export class LessonsPageComponent {

  @ViewChild(CalendarComponent) myCalendar;

  events;

  constructor(private lessonService: Lesson, private usersService: User) {
    this.getConfig();
  }

  getConfig() {
    this.lessonService.query().$observable.subscribe(data => {
      this.events = data.map((lesson) => {
        return {
          title: 'Lesson',
          start: lesson.startDateTime
        }
      });
    });
  }

  changeCalendarView(view) {
    this.myCalendar.fullCalendar('changeView', view);
  }
}
