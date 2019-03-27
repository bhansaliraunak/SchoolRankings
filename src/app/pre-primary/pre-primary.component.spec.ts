import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePrimaryComponent } from './pre-primary.component';

describe('PrePrimaryComponent', () => {
  let component: PrePrimaryComponent;
  let fixture: ComponentFixture<PrePrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrePrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
