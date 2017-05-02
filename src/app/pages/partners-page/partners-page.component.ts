import { Component } from '@angular/core';

import { IUserShort } from 'app/shared/interfaces/user.interface';
import { User } from 'app/shared/services/resources/user';

import { ILanguage } from 'app/shared/interfaces/language.interface';
import { Language } from 'app/shared/services/resources/language';

import './partners-page.component.scss';

@Component({
  selector: 'cn-partners-page',
  host: { class: 'cn-partners-page' },
  templateUrl: 'partners-page.component.html'
})
export class PartnersPageComponent {
  public results: IUserShort[];
  public languages: ILanguage;

  constructor(private userService: User, private languageService: Language) {

  }

  find() {
    this.results = this.userService.query();
  }
}
