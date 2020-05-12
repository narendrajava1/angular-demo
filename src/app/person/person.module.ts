import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-list/edit/person.edit.component';
import { PersonRoutingModule } from './person-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonService } from './service/person.service';




@NgModule({
  declarations: [
    PersonComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
	  PersonRoutingModule
  ],
  providers: [ PersonService ]
})
export class PersonModule { }
