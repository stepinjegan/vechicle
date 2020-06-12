import { TestBed } from '@angular/core/testing';

import { VehService } from './veh.service';

describe('VehService', () => {
  let service: VehService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
