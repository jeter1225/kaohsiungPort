import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotOrderChangeOrderComponent } from './pilot-order-change-order.component';

describe('PilotOrderChangeOrderComponent', () => {
  let component: PilotOrderChangeOrderComponent;
  let fixture: ComponentFixture<PilotOrderChangeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotOrderChangeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotOrderChangeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
