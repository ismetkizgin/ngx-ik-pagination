import { TestBed } from '@angular/core/testing';

import { NgxIkPaginationService } from './ngx-ik-pagination.service';

describe('NgxIkPaginationService', () => {
  let service: NgxIkPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIkPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
