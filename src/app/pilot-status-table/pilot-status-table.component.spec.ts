
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotStatusTableComponent } from './pilot-status-table.component';

describe('PilotStatusTableComponent', () => {
  let component: PilotStatusTableComponent;
  let fixture: ComponentFixture<PilotStatusTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotStatusTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
