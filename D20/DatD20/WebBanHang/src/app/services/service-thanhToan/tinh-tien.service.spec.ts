import { TestBed } from '@angular/core/testing';

import { TinhTienService } from './tinh-tien.service';

describe('TinhTienService', () => {
  let service: TinhTienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TinhTienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
