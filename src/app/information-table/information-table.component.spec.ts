
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTableComponent } from './information-table.component';

describe('InformationTableComponent', () => {
  let component: InformationTableComponent;
  let fixture: ComponentFixture<InformationTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
