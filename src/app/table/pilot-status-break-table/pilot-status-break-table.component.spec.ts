
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotStatusBreakTableComponent } from './pilot-status-break-table.component';

describe('PilotStatusBreakTableComponent', () => {
  let component: PilotStatusBreakTableComponent;
  let fixture: ComponentFixture<PilotStatusBreakTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotStatusBreakTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotStatusBreakTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
