import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IMyDateModel, IMyOptions, IMyDate } from 'mydatepicker';
import * as moment from 'moment';
import { get } from 'lodash';

import './date.component.scss';

@Component({
  selector: 'ab-date',
  host: { class: 'ab-date' },
  templateUrl: './date.component.html'
})
export class DateComponent implements OnInit {

  private static isMyDate(date: any): boolean {
    return !!(get(date, 'date.year') && get(date, 'date.month') && get(date, 'date.day'));
  }

  @Input() public date: any | {date: IMyDate} = {
    date: {
      year: moment().year(),
      month: moment().month() + 1,
      day: moment().date()
    }
  };
  @Output() public dateChange = new EventEmitter<string>();

  public isSet: boolean = false;

  public myDatePickerOptions: IMyOptions = {
    dateFormat: 'mm/dd/yyyy',
    showClearDateBtn: false,
    showTodayBtn: false,
    height: '1.6rem',
    selectionTxtFontSize: '1.6rem'
  };

  public ngOnInit() {
    if (!DateComponent.isMyDate(this.date)) {
      const parsedModel = moment(this.date);
      this.date = {
        date: {
          year: parsedModel.year(),
          month: parsedModel.month() + 1,
          day: parsedModel.date()
        }
      };
    }
  }

  public onDateChanged(e: IMyDateModel) {
    this.isSet = !!e.jsdate;
    this.dateChange.emit(e.jsdate.toISOString());
  }
}
