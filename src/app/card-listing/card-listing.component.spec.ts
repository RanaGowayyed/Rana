/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardListingComponent } from './card-listing.component';

describe('CardListingComponent', () => {
  let component: CardListingComponent;
  let fixture: ComponentFixture<CardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
