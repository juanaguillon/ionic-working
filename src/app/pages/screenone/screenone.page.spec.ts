import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenonePage } from './screenone.page';

describe('ScreenonePage', () => {
  let component: ScreenonePage;
  let fixture: ComponentFixture<ScreenonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
