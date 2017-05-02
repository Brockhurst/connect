import { Component, Input, OnInit } from '@angular/core';

import './language.component.scss';

@Component({
  selector: 'cn-lang',
  host: { class: 'cn-lang' },
  templateUrl: 'language.component.html'
})
export class LanguageComponent {
  @Input() public skill;

  public max = 5;
}
