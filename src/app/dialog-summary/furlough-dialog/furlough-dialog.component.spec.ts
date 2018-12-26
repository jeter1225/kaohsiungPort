import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurloughDialogComponent } from './furlough-dialog.component';

describe('FurloughDialogComponent', () => {
  let component: FurloughDialogComponent;
  let fixture: ComponentFixture<FurloughDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurloughDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurloughDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
