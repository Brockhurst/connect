import { Component, Input, OnInit, OnChanges } from '@angular/core';
import * as moment from 'moment';

import { TimelineService } from './timeline.service';

import './timeline.component.scss';

export interface BlockConfig {
  year: number;
  month: number;
  monthName: string;
  days: number;
  partial: number;
  firstEraBlock?: boolean;
  eraPercentage?: number;
  displayDate?: number;
}

export interface Era {
  startDate: string;
  endDate: string;
  weight: number;
  cssClass: string;
  blocksConfig?: BlockConfig[];
}

export interface DateTitleBlock {
  eraPercentage: number;
  partial: number;
  displayDate: number;
  firstEraBlock: boolean;
}

export interface MonthTitleBlock  {
  monthName: string;
  partial: number;
}

export interface ITimelineComponent {
  dataSeries: Era[];
  startDate: moment.Moment;
  endDate: moment.Moment;
  eraBlocksConfig: Era[];

  monthTitleBlocks: MonthTitleBlock[];

  dateTitleBlocks: DateTitleBlock[];
}

@Component({
  selector: 'ab-timeline',
  host: { class: 'ab-timeline' },
  templateUrl: './timeline.component.html',
  providers: [ TimelineService ]
})
export class TimelineComponent implements OnInit, OnChanges, ITimelineComponent {

  @Input() public dataSeries: Era[] = [];
  @Input() public startDate: moment.Moment;
  @Input() public endDate: moment.Moment = moment();

  public eraBlocksConfig: Era[];

  public monthTitleBlocks: MonthTitleBlock[];

  public dateTitleBlocks: DateTitleBlock[];

  constructor(private timelineService: TimelineService) {}

  public ngOnInit() {
    this.updateTimeline();
  }

  public ngOnChanges() {
    this.updateTimeline();
  }

  public updateTimeline() {
    const totalBlocksConfig = this.timelineService.calculateTotalBlocks(this);
    this.eraBlocksConfig = this.dataSeries
      .map((era) => this.timelineService.calculateEraBlocks(totalBlocksConfig, era));
    this.monthTitleBlocks = this.timelineService.getMonthTitleBlocks(totalBlocksConfig);

    if (this.eraBlocksConfig.length) {
      this.dateTitleBlocks = this.timelineService.getDateTitleBlocks(this.eraBlocksConfig);
    }
  }
}
