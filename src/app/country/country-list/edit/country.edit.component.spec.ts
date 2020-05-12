import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Country.EditComponent } from './country.edit.component';

describe('Country.EditComponent', () => {
  let component: Country.EditComponent;
  let fixture: ComponentFixture<Country.EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Country.EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Country.EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
