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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchItemsBlockComponent } from './components/search-items-block/search-items-block.component';
import { MatButtonModule, MatCardModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SearchService} from './services/search.service';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchHeaderComponent,
    SortHeaderComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    SearchItemComponent,
    SearchItemsBlockComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [SearchService,     CustomDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
