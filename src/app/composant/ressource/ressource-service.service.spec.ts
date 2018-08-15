import { TestBed, inject } from '@angular/core/testing';

import { RessourceServiceService } from './ressource-service.service';

describe('RessourceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RessourceServiceService]
    });
  });

  it('should be created', inject([RessourceServiceService], (service: RessourceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
