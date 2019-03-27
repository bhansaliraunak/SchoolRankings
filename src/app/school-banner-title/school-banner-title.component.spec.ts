import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBannerTitleComponent } from './school-banner-title.component';

describe('SchoolBannerTitleComponent', () => {
  let component: SchoolBannerTitleComponent;
  let fixture: ComponentFixture<SchoolBannerTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolBannerTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolBannerTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
