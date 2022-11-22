import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BodyComponent} from './body/body.component';
import {ProfileComponent} from './profile/profile.component';
import {ReposComponent} from './repos/repos.component';
import {HttpClientModule} from "@angular/common/http";
import {DateAgoPipe} from './pipes/date-ago.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {ServiceWorkerModule} from '@angular/service-worker';
import {FormComponent} from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    ProfileComponent,
    ReposComponent,
    DateAgoPipe,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerImmediately'
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
