import { TestBed } from '@angular/core/testing';

import { AdultoService } from './adulto.service';

describe('JuniorZambrano', () => {
  let service: AdultoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdultoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
