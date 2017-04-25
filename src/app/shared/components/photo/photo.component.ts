import { Component, Input } from '@angular/core';

import './photo.component.scss';

@Component({
  selector: 'ab-photo',
  host: { class: 'ab-photo ab-photo-prototype' },
  templateUrl: './photo.component.html'
})
export class PhotoComponent {

  @Input() public src = '';

}
