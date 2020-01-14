import { TestBed } from '@angular/core/testing';

import { DefaultServiceService } from './default-service.service';

describe('DefaultServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultServiceService = TestBed.get(DefaultServiceService);
    expect(service).toBeTruthy();
  });
});
