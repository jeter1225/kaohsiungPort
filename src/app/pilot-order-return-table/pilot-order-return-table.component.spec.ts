
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotOrderReturnTableComponent } from './pilot-order-return-table.component';

describe('PilotOrderReturnTableComponent', () => {
  let component: PilotOrderReturnTableComponent;
  let fixture: ComponentFixture<PilotOrderReturnTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotOrderReturnTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotOrderReturnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
