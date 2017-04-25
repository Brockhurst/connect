import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Era } from 'app/shared/components/timeline/timeline.component';
import { IAssignment } from 'app/shared/interfaces/assignment.interface';
import './assignment.component.scss';
import 'app/shared/styles/components/index.scss';

@Component({
  selector: 'ab-assignment',
  host: { class: 'ab-assignment' },
  templateUrl: './assignment.component.html'
})
export class AssignmentComponent implements OnInit {
  @Input() public assignment: IAssignment;

  public timeLineStartDate: moment.Moment;
  public timeLineEndDate: moment.Moment;
  public timeline: Era[];

  public ngOnInit() {
    const { startDate, endDate, weight, activity: { type } } = this.assignment;

    this.timeLineStartDate = moment(startDate).startOf('month');
    this.timeLineEndDate = moment(endDate).endOf('month');

    this.timeline = [{
      startDate,
      endDate,
      weight,
      cssClass: `ab-type_${type.toLowerCase()}_bg`
    }];
  }
}
