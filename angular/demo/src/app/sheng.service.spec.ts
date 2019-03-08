import { TestBed } from '@angular/core/testing';

import { ShengService } from './sheng.service';

describe('ShengService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShengService = TestBed.get(ShengService);
    expect(service).toBeTruthy();
  });
});
