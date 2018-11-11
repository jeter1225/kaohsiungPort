
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotOrderTableComponent } from './pilot-order-table.component';

describe('PilotOrderTableComponent', () => {
  let component: PilotOrderTableComponent;
  let fixture: ComponentFixture<PilotOrderTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotOrderTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
