import { TestBed } from '@angular/core/testing';

import { QuotingService } from './quoting.service';

describe('QuotingService', () => {
  let service: QuotingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
