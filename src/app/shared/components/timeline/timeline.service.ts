import { Injectable } from '@angular/core';
import * as moment from 'moment';

import {
  Era,
  BlockConfig,
  DateTitleBlock,
  MonthTitleBlock,
  ITimelineComponent
} from './timeline.component';

@Injectable()
export class TimelineService {

  private static isInEraRange(block: BlockConfig,
                              parsedEraStartDate: moment.Moment,
                              parsedEraEndDate: moment.Moment): boolean {
    const startPoint = parsedEraStartDate.clone().date(1);
    const endPoint = parsedEraEndDate.clone().date(1);
    const parsedDate = moment(`${block.month + 1}-${block.year}`, 'MM-YYYY');

    return parsedDate.isSameOrAfter(startPoint) && parsedDate.isSameOrBefore(endPoint);
  }

  private static isTheSameMonth(block: BlockConfig, parsedDate: moment.Moment): boolean {
    return block.month === parsedDate.month() && block.year === parsedDate.year();
  }

  public repeatWeight(weight: number) {
    return Array(weight);
  }

  public calculateTotalBlocks(timeline: ITimelineComponent): BlockConfig[] {
    const parsedStartDate = moment(timeline.startDate);
    const parsedEndDate = moment(timeline.endDate);
    const daysOfFirstMonth = parsedStartDate.daysInMonth() - parsedStartDate.date() + 1;

    const result = [{
      year: parsedStartDate.year(),
      month: parsedStartDate.month(),
      monthName: parsedStartDate.format('MMM'),
      days: daysOfFirstMonth,
      partial: daysOfFirstMonth / parsedStartDate.daysInMonth()
    }];

    if (parsedStartDate.month() !== parsedEndDate.month()) {
      result.push({
        year: parsedEndDate.year(),
        month: parsedEndDate.month(),
        monthName: parsedEndDate.format('MMM'),
        days: parsedEndDate.date(),
        partial: parsedEndDate.date() / parsedEndDate.daysInMonth()
      });
    }

    let i = parsedStartDate.add(1, 'months');
    while (i.isBefore(parsedEndDate.clone().startOf('month'))) {
      result.splice(-1, 0, {
        year: i.year(),
        month: i.month(),
        monthName: i.format('MMM'),
        days: i.daysInMonth(),
        partial: 1
      });
      i = i.add(1, 'months');
    }

    return result;
  }

  public calculateEraBlocks(blocksConfig: BlockConfig[], era: Era): Era {
    const parsedStartDate = moment(era.startDate);
    const parsedEndDate = moment(era.endDate);

    blocksConfig.forEach((block) => {
      block.eraPercentage = 0;
      if (TimelineService.isTheSameMonth(block, parsedStartDate)) {
        block.eraPercentage = (parsedStartDate.daysInMonth() - parsedStartDate.date() + 1) / block.days;
        block.displayDate = parsedStartDate.date();
        block.firstEraBlock = true;
      } else if (TimelineService.isTheSameMonth(block, parsedEndDate)) {
        block.eraPercentage = parsedEndDate.date() / block.days;
        block.displayDate = parsedEndDate.date();
      } else if (TimelineService.isInEraRange(block, parsedStartDate, parsedEndDate)) {
        block.eraPercentage = 1;
      }
      block.eraPercentage = block.eraPercentage > 1 ? 100 : block.eraPercentage * 100;
    });

    era.blocksConfig = blocksConfig;

    return era;
  }

  public getMonthTitleBlocks(totalBlocksConfig: BlockConfig[]): MonthTitleBlock[] {
    return totalBlocksConfig.map(({monthName, partial}) => ({
      monthName,
      partial,
    }));
  }

  public getDateTitleBlocks(eras: Era[]): DateTitleBlock[] {
    return eras[0].blocksConfig.map(({
      firstEraBlock,
      eraPercentage,
      partial,
      displayDate
    }) => ({
      firstEraBlock,
      eraPercentage,
      partial,
      displayDate
    }));
  }
}
