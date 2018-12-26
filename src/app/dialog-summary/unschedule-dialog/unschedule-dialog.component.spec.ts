import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduleDialogComponent } from './unschedule-dialog.component';

describe('UnscheduleDialogComponent', () => {
  let component: UnscheduleDialogComponent;
  let fixture: ComponentFixture<UnscheduleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnscheduleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnscheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
