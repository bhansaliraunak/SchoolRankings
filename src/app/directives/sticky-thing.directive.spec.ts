import {StickyThingDirective} from './sticky-thing.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: '<float-container>',
  template: '<div class="first" #boundary> <div #spacer></div> <div class="some-thing-sticky" stickyThing="" [spacer]="spacer" [boundary]="boundary"> Hello </div> </div>'
})

export class TestFloatingContainer {}


describe('Directive: StickyThingDirective', () => {

  let component: TestFloatingContainer;
  let fixture: ComponentFixture<TestFloatingContainer>;
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFloatingContainer, StickyThingDirective]
    });
    fixture = TestBed.createComponent(TestFloatingContainer);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(StickyThingDirective));

  });

});
