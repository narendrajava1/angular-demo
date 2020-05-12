import { NgModule } from '@angular/core';
import { PersonComponent } from './person.component';
import { PersonEditComponent } from './person-list/edit/person.edit.component';
import { PersonListComponent } from './person-list/person-list.component';
import { RouterModule, Routes } from '@angular/router';

const personRoutes: Routes = [
	{ 
	  path: 'person',
          component: PersonComponent,
	  children: [ 
	    {
		path: '',
		component: PersonListComponent,
		children: [
		   {
		     path: ':id',
		     component: PersonEditComponent
		   }
		]			
	    }
	  ]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(personRoutes) ],
  exports: [ RouterModule ]
})
export class PersonRoutingModule{ } 