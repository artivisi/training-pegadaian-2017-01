/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JualComponent } from './jual.component';

describe('JualComponent', () => {
  let component: JualComponent;
  let fixture: ComponentFixture<JualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
