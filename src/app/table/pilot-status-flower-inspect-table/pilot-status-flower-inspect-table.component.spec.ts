
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotStatusFlowerInspectTableComponent } from './pilot-status-flower-inspect-table.component';

describe('PilotStatusFlowerInspectTableComponent', () => {
  let component: PilotStatusFlowerInspectTableComponent;
  let fixture: ComponentFixture<PilotStatusFlowerInspectTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotStatusFlowerInspectTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotStatusFlowerInspectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
