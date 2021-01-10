import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursepageComponent } from './pages/coursepage/coursepage.component';
import { CourseDatailPageComponent } from './pages/course-datail-page/course-datail-page.component';
import { CourseComponent } from './components/course/course.component';
import { CoursecontainerComponent } from './components/coursecontainer/coursecontainer.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorcontainerComponent } from './components/instructorcontainer/instructorcontainer.component';

@NgModule({
  declarations: [
    CoursepageComponent,
    CourseDatailPageComponent,
    CourseComponent,
    CoursecontainerComponent,
    InstructorComponent,
    InstructorcontainerComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
