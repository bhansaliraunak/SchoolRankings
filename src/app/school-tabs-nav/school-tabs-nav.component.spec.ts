import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTabsNavComponent } from './school-tabs-nav.component';

describe('SchoolTabsNavComponent', () => {
  let component: SchoolTabsNavComponent;
  let fixture: ComponentFixture<SchoolTabsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolTabsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolTabsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
