import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotOrderReturnComponent } from './pilot-order-return.component';

describe('PilotOrderReturnComponent', () => {
  let component: PilotOrderReturnComponent;
  let fixture: ComponentFixture<PilotOrderReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotOrderReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotOrderReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
