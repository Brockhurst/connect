import { Component, Input } from '@angular/core';

import './title-bar.component.scss';

@Component({
  selector: 'ab-title-bar',
  host: { class: 'ab-title-bar' },
  templateUrl: './title-bar.component.html'
})
export class TitleBarComponent {

  @Input() public heading: string = '';
  @Input() public subheading: string = '';

}
