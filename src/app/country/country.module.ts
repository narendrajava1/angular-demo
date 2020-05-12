import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-list/detail/country-detail.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryEditComponent } from './country-list/edit/country.edit.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { CountryRoutingModule } from './country-routing.module';
import { CountryService } from './service/country.service';



@NgModule({
  declarations: [
    CountryComponent,
    AddCountryComponent,
    CountryListComponent,
    CountryEditComponent,
    CountryDetailComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountryRoutingModule

  ],
  providers:[
    CountryService
  ]
})
export class CountryModule { }
