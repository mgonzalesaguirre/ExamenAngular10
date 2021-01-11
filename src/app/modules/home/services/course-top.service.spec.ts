import { TestBed } from '@angular/core/testing';

import { CourseTopService } from './course-top.service';

describe('CourseTopService', () => {
  let service: CourseTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseTopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
