/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BeliComponent } from './beli.component';

describe('BeliComponent', () => {
  let component: BeliComponent;
  let fixture: ComponentFixture<BeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
