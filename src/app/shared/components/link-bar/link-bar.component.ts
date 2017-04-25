import { Component, Input } from '@angular/core';

import './link-bar.component.scss';

export interface Link {
  text: string;
  href: string;
}

@Component({
  selector: 'ab-link-bar',
  host: { class: 'ab-link-bar' },
  templateUrl: './link-bar.component.html'
})
export class LinkBarComponent {

  @Input() public links: Link[] = [];

}
