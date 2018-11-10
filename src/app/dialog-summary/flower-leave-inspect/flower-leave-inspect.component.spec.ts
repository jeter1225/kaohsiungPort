import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerLeaveInspectComponent } from './flower-leave-inspect.component';

describe('FlowerLeaveInspectComponent', () => {
  let component: FlowerLeaveInspectComponent;
  let fixture: ComponentFixture<FlowerLeaveInspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerLeaveInspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerLeaveInspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
