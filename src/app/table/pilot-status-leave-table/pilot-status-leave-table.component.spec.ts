
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotStatusLeaveTableComponent } from './pilot-status-leave-table.component';

describe('PilotStatusLeaveTableComponent', () => {
  let component: PilotStatusLeaveTableComponent;
  let fixture: ComponentFixture<PilotStatusLeaveTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotStatusLeaveTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotStatusLeaveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
