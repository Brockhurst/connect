import { Component } from '@angular/core';
import { Topic } from 'app/shared/services/resources/topic';
import { Language } from 'app/shared/services/resources/language';

import { ILanguage } from 'app/shared/interfaces/language.interface';
import { ITopic } from 'app/shared/interfaces/topic.interface';

import './main-page.component.scss';

@Component({
  selector: 'ab-main-page',
  host: { class: 'ab-main-page' },
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public simplestLanguages: ILanguage[];
  public trendingTopics: ITopic[];

  constructor(private languageService: Language, private topicService: Topic) {
    console.log(languageService.getSimplest());
    this.simplestLanguages = languageService.getSimplest();
    this.trendingTopics = topicService.getTrending();
  }
}
