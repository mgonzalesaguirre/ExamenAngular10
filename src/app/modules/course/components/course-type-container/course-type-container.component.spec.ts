import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTypeContainerComponent } from './course-type-container.component';

describe('CourseTypeContainerComponent', () => {
  let component: CourseTypeContainerComponent;
  let fixture: ComponentFixture<CourseTypeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTypeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTypeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
