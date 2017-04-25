import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Era } from 'app/shared/components/timeline/timeline.component';

import './activity.component.scss';

@Component({
  selector: 'ab-activity',
  host: { class: 'ab-activity' },
  templateUrl: './activity.component.html'
})
export class ActivityComponent implements OnInit {
  public timelineStartDate: moment.Moment;
  public timelineEndDate: moment.Moment;
  public endDate: string = moment().add(3, 'months').toISOString();
  public startDate: string = moment().toISOString();
  public timeline: Era[];

  public types: Object[] = [
    { text: 'Local', className: 'ab-type ab-type_local_important' },
    { text: 'CDP', className: 'ab-type ab-type_cdp_important' },
    { text: 'RD', className: 'ab-type ab-type_rd_important' },
    { text: 'CC', className: 'ab-type ab-type_cc_important' },
    { text: 'HR', className: 'ab-type ab-type_hr_important' },
    { text: 'IP', className: 'ab-type ab-type_ip_important' }
  ];
  public weights: Object[] = [
    { text: '1' },
    { text: '2' },
    { text: '3' }
  ];

  public ngOnInit() {
    this.updateTimeline();
  }

  public set endDatePeriod(value) {
    this.endDate = value;
    this.updateTimeline();
  }

  public get endDatePeriod() {
    return this.endDate;
  }

  public set startDatePeriod(value) {
    this.startDate = value;
    this.updateTimeline();
  }

  public get startDatePeriod() {
    return this.startDate;
  }

  private updateTimeline() {
    const { startDate, endDate } = this;
    this.timelineEndDate = moment(this.endDate).endOf('month');
    this.timelineStartDate = moment(this.startDate).startOf('month');
    this.timeline = [{
      startDate,
      endDate,
      weight: 2,
      cssClass: 'ab-type_cc_bg'
    }];
  }
}
