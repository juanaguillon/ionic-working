import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreentwoPage } from './screentwo.page';

describe('ScreentwoPage', () => {
  let component: ScreentwoPage;
  let fixture: ComponentFixture<ScreentwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreentwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreentwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
