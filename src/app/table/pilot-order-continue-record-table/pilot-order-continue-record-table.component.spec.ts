
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotOrderContinueRecordTableComponent } from './pilot-order-continue-record-table.component';

describe('PilotOrderContinueRecordTableComponent', () => {
  let component: PilotOrderContinueRecordTableComponent;
  let fixture: ComponentFixture<PilotOrderContinueRecordTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotOrderContinueRecordTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotOrderContinueRecordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
