import { TestBed } from '@angular/core/testing';

import { YesavageService } from './yesavage.service';

describe('YesavageService', () => {
  let service: YesavageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YesavageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 