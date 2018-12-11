import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduleComponent } from './unschedule.component';

describe('UnscheduleComponent', () => {
  let component: UnscheduleComponent;
  let fixture: ComponentFixture<UnscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
