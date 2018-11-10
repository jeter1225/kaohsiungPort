import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotBreakInspectComponent } from './pilot-break-inspect.component';

describe('PilotBreakInspectComponent', () => {
  let component: PilotBreakInspectComponent;
  let fixture: ComponentFixture<PilotBreakInspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotBreakInspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotBreakInspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
