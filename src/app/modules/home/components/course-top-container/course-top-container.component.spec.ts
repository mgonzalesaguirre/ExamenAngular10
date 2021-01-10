import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTopContainerComponent } from './course-top-container.component';

describe('CourseTopContainerComponent', () => {
  let component: CourseTopContainerComponent;
  let fixture: ComponentFixture<CourseTopContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTopContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
