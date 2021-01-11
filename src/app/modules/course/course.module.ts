import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursepageComponent } from './pages/coursepage/coursepage.component';
import { CourseDatailPageComponent } from './pages/course-datail-page/course-datail-page.component';
import { CoursecontainerComponent } from './components/coursecontainer/coursecontainer.component';
import { CourseTypeContainerComponent } from './components/course-type-container/course-type-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TypecourseService } from './services/typecourse.service';

@NgModule({
  declarations: [
    CoursepageComponent,
    CourseDatailPageComponent,
    CoursecontainerComponent,
    CourseTypeContainerComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ],
  providers: [TypecourseService]
})
export class CourseModule { }
