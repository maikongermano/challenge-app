import { TestBed } from '@angular/core/testing';

import { ServicePersonService } from './service-person.service';

describe('ServicePersonService', () => {
  let service: ServicePersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
