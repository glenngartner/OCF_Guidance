import { TestBed } from '@angular/core/testing';

import { QAndAService } from './q-and-a.service';

describe('QAndAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QAndAService = TestBed.get(QAndAService);
    expect(service).toBeTruthy();
  });
});
