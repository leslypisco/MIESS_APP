import { TestBed } from '@angular/core/testing';

import { BarthelService } from './barthel.service';

describe('BarthelService', () => {
  let service: BarthelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarthelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
