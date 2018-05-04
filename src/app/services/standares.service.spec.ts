import { TestBed, inject } from '@angular/core/testing';

import { StandaresService } from './standares.service';

describe('StandaresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandaresService]
    });
  });

  it('should be created', inject([StandaresService], (service: StandaresService) => {
    expect(service).toBeTruthy();
  }));
});
