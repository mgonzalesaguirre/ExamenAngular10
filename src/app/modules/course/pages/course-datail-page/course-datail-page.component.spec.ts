import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDatailPageComponent } from './course-datail-page.component';

describe('CourseDatailPageComponent', () => {
  let component: CourseDatailPageComponent;
  let fixture: ComponentFixture<CourseDatailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDatailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDatailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
