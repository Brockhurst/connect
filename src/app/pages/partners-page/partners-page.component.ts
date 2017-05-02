import { Component } from '@angular/core';

import { currentUser } from 'app/shared/services/current-user.service'

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
  public languages: ILanguage[];
  public levels = ['Basic', 'Intermediate', 'Advanced'];

  public selectedLanguage = 0;
  public selectedLevel = 0;

  constructor(private userService: User, private languageService: Language) {
    this.languages = languageService.query();
  }

  find() {
    if (this.selectedLanguage && this.selectedLevel) {
      this.results = this.userService.search({
        languageId: this.selectedLanguage,
        level: this.selectedLevel,
        id: currentUser.id
      });
    }
  }
}
