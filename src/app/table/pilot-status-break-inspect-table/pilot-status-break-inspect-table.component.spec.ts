
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotStatusBreakInspectTableComponent } from './pilot-status-break-inspect-table.component';

describe('PilotStatusBreakInspectTableComponent', () => {
  let component: PilotStatusBreakInspectTableComponent;
  let fixture: ComponentFixture<PilotStatusBreakInspectTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotStatusBreakInspectTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotStatusBreakInspectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
