import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {RouterModule} from '@angular/router';
import {TranslateStaticLoader} from 'ng2-translate';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {IndexComponent} from './index/index.component';
import {TestComponent} from './test/test.component';
import { AboutComponent } from './about/about.component';
import { ApiComponent } from './api/api.component';
import { UserComponent } from './user/user.component';

export function createTranslateLoader(http:Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TestComponent,
    AboutComponent,
    ApiComponent,
    UserComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
