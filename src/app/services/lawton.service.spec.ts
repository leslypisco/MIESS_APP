import { TestBed } from '@angular/core/testing';

import { LawtonService } from './lawton.service';

describe('LawtonService', () => {
  let service: LawtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
