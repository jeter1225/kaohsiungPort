import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWorkComponent } from './continue-work.component';

describe('ContinueWorkComponent', () => {
  let component: ContinueWorkComponent;
  let fixture: ComponentFixture<ContinueWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
