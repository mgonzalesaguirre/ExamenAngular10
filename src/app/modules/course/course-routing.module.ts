import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDatailPageComponent } from './pages/course-datail-page/course-datail-page.component';
import { CoursepageComponent } from './pages/coursepage/coursepage.component';

const routes: Routes = [
  {
    path: '',
    component: CoursepageComponent
  },
  {
    path: ':id',
    component: CourseDatailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
