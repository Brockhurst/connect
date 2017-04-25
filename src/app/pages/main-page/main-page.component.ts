import { Component } from '@angular/core';
import { Link } from 'app/shared/components/link-bar/link-bar.component';

import './main-page.component.scss';

@Component({
  selector: 'ab-main-page',
  host: { class: 'ab-main-page' },
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public links: Link[] = [
    { text: 'all', href: '#' },
    { text: 'new', href: '#' },
    { text: 'assigned', href: '#' },
    { text: 'closed', href: '#' },
  ];

}
