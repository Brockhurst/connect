import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';

import { CheckboxComponent } from './checkbox';
import { CheckItemComponent } from './check-item';
import { LinkBarComponent } from './link-bar';
import { UpdateCounterComponent } from './update-counter';
import { AvatarComponent } from './avatar';
import { AvatarPlusComponent } from './avatar-plus';
import { FilterComponent } from './filter';
import { FooterComponent } from './footer';
import { NavbarComponent } from './navbar';
import { PhotoComponent } from  './photo';
import { SearchComponent } from './search';
import { TimelineComponent } from './timeline';
import { TitleBarComponent } from './title-bar';
import { DropdownComponent } from './dropdown';
import { ActionsComponent } from './actions';
import { EditableComponent } from './editable';
import { TagsComponent } from './tags';
import { DateComponent } from './date';
import { PeriodComponent } from './period';
import { LanguageComponent } from './language';
import { RatingComponent } from './rating';
import { FriendComponent } from './friend';

const components = [
  CheckboxComponent,
  CheckItemComponent,
  LinkBarComponent,
  UpdateCounterComponent,
  AvatarComponent,
  AvatarPlusComponent,
  FilterComponent,
  FooterComponent,
  NavbarComponent,
  PhotoComponent,
  SearchComponent,
  TimelineComponent,
  TitleBarComponent,
  DropdownComponent,
  ActionsComponent,
  EditableComponent,
  TagsComponent,
  DateComponent,
  PeriodComponent,
  LanguageComponent,
  RatingComponent,
  FriendComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MyDatePickerModule
  ],
  declarations: components,
  exports: components
})
export class ComponentsModule {
}
