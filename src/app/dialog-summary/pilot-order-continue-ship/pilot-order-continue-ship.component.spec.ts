import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotOrderContinueShipComponent } from './pilot-order-continue-ship.component';

describe('PilotOrderContinueShipComponent', () => {
  let component: PilotOrderContinueShipComponent;
  let fixture: ComponentFixture<PilotOrderContinueShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotOrderContinueShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotOrderContinueShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
