import { TestBed, inject } from '@angular/core/testing';

import { BreakService } from './break.service';

describe('BreakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakService]
    });
  });

  it('should be created', inject([BreakService], (service: BreakService) => {
    expect(service).toBeTruthy();
  }));
});
