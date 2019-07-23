import { TestBed } from '@angular/core/testing';

import { AllAgenciesService } from './all-agencies.service';

describe('AllAgenciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllAgenciesService = TestBed.get(AllAgenciesService);
    expect(service).toBeTruthy();
  });
});
