import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaktimeDialogComponent } from './breaktime-dialog.component';

describe('BreaktimeDialogComponent', () => {
  let component: BreaktimeDialogComponent;
  let fixture: ComponentFixture<BreaktimeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreaktimeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreaktimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
