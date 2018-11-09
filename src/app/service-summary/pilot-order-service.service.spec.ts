import { TestBed, inject } from '@angular/core/testing';

import { PilotOrderServiceService } from './pilot-order-service.service';

describe('PilotOrderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotOrderServiceService]
    });
  });

  it('should be created', inject([PilotOrderServiceService], (service: PilotOrderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
