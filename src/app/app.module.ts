import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SearchHeaderComponent } from './components/headers/search-header/search-header.component';
import { SortHeaderComponent } from './components/headers/sort-header/sort-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './components/authentication/login-page/login-page.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import {RegistrationPageComponent} from '@auth/registration-page/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchHeaderComponent,
    SortHeaderComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
