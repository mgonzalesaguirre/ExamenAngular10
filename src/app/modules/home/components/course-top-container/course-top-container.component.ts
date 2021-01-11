import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/components/course/interfaces/course';
import { CourseTopService } from '../../services/course-top.service';

@Component({
  selector: 'app-course-top-container',
  templateUrl: './course-top-container.component.html',
  styleUrls: ['./course-top-container.component.scss']
})
export class CourseTopContainerComponent implements OnInit {

  topCourses: ICourse[];

  constructor(private courseserv: CourseTopService) { 

  }

  ngOnInit(): void {
    this.getCourseTop();
  }

  getCourseTop(){
    this.courseserv.getTopCourses()
    .subscribe((res: ICourse[]) => {
      this.topCourses = res;
    });
  }

}
