import { TestBed, inject } from '@angular/core/testing';

import { ConfigLogService } from './config-log.service';

describe('ConfigLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigLogService]
    });
  });

  it('should be created', inject([ConfigLogService], (service: ConfigLogService) => {
    expect(service).toBeTruthy();
  }));
});
