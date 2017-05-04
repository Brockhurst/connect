import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';

import { ComponentsModule } from 'app/shared/components';

import { LoginPageRoutingModule } from './login-page-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class LoginPageModule {
}
