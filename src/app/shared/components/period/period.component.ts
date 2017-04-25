import { Component, Input, Output, EventEmitter } from '@angular/core';

import './period.component.scss';

@Component({
  selector: 'ab-period',
  host: { class: 'ab-period' },
  templateUrl: './period.component.html'
})
export class PeriodComponent {
  @Input() public startDate: string = new Date().toString();
  @Input() public endDate: string = new Date().toString();

  @Output() public startDateChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public endDateChange: EventEmitter<string> = new EventEmitter<string>();

  public onStartDateChange(date: string) {
    this.startDateChange.emit(date);
  }

  public onEndDateChange(date: string) {
    this.endDateChange.emit(date);
  }
}
