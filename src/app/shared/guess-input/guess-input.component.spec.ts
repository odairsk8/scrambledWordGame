/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuessInputComponent } from './guess-input.component';

describe('GuessInputComponent', () => {
  let component: GuessInputComponent;
  let fixture: ComponentFixture<GuessInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
