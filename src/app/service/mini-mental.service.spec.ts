import { TestBed } from '@angular/core/testing';

import { MiniMentalService } from './mini-mental.service';

describe('MiniMentalService', () => {
  let service: MiniMentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniMentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
