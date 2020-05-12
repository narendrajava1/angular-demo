import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './address.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CountryModule } from './country/country.module';
import { PersonModule } from './person/person.module';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CountryModule,
    PersonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
