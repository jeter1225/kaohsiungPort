import { TestBed, inject } from '@angular/core/testing';

import { UnscheduleService } from './unschedule.service';

describe('UnscheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnscheduleService]
    });
  });

  it('should be created', inject([UnscheduleService], (service: UnscheduleService) => {
    expect(service).toBeTruthy();
  }));
});
