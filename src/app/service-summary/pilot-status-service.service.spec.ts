import { TestBed, inject } from '@angular/core/testing';

import { PilotStatusServiceService } from './pilot-status-service.service';

describe('PilotStatusServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotStatusServiceService]
    });
  });

  it('should be created', inject([PilotStatusServiceService], (service: PilotStatusServiceService) => {
    expect(service).toBeTruthy();
  }));
});
