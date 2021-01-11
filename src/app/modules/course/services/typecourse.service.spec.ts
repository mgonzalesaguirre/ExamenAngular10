import { TestBed } from '@angular/core/testing';

import { TypecourseService } from './typecourse.service';

describe('TypecourseService', () => {
  let service: TypecourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypecourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
