import { TestBed, inject } from '@angular/core/testing';

import { WorkingService } from './working.service';

describe('WorkingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkingService]
    });
  });

  it('should be created', inject([WorkingService], (service: WorkingService) => {
    expect(service).toBeTruthy();
  }));
});
