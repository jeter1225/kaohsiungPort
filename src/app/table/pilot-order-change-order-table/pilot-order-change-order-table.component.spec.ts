
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotOrderChangeOrderTableComponent } from './pilot-order-change-order-table.component';

describe('PilotOrderChangeOrderTableComponent', () => {
  let component: PilotOrderChangeOrderTableComponent;
  let fixture: ComponentFixture<PilotOrderChangeOrderTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotOrderChangeOrderTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotOrderChangeOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
