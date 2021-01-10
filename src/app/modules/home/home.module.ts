import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseTopContainerComponent } from './components/course-top-container/course-top-container.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomepageComponent, HeaderComponent, CourseTopContainerComponent, InstructorComponent, InstructorContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
