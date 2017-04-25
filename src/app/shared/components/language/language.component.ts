import { Component, Input, OnInit } from '@angular/core';

import { ILanguage } from 'app/shared/interfaces/language.interface';

import './language.component.scss';

@Component({
  selector: 'cn-lang',
  host: { class: 'cn-lang' },
  templateUrl: 'language.component.html'
})
export class LanguageComponent {
  @Input() public language: ILanguage;
}
