import { TestBed, inject } from '@angular/core/testing';

import { InformationDataService } from './information-data.service';

describe('InformationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformationDataService]
    });
  });

  it('should be created', inject([InformationDataService], (service: InformationDataService) => {
    expect(service).toBeTruthy();
  }));
});
