import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurloughComponent } from './furlough.component';

describe('FurloughComponent', () => {
  let component: FurloughComponent;
  let fixture: ComponentFixture<FurloughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurloughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurloughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
