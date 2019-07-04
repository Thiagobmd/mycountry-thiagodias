import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCountryListComponent } from './my-country-list.component';

describe('MyCountryListComponent', () => {
  let component: MyCountryListComponent;
  let fixture: ComponentFixture<MyCountryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCountryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
