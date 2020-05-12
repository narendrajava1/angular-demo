import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Person.EditComponent } from './person.edit.component';

describe('Person.EditComponent', () => {
  let component: Person.EditComponent;
  let fixture: ComponentFixture<Person.EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Person.EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Person.EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
