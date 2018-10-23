import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPasswordDialogComponent } from './send-password-dialog.component';

describe('SendPasswordDialogComponent', () => {
  let component: SendPasswordDialogComponent;
  let fixture: ComponentFixture<SendPasswordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPasswordDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
