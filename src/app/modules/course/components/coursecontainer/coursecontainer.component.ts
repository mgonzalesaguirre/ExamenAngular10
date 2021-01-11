import { Component, OnInit } from '@angular/core';
import { CourseTopService } from 'src/app/modules/home/services/course-top.service';
import { ICourse } from 'src/app/shared/components/course/interfaces/course';

@Component({
  selector: 'app-coursecontainer',
  templateUrl: './coursecontainer.component.html',
  styleUrls: ['./coursecontainer.component.scss']
})
export class CoursecontainerComponent implements OnInit {

  listCourse: ICourse[];

  constructor(private courseserv: CourseTopService) { 

  }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(){
    this.courseserv.getCourses()
    .subscribe((res: ICourse[]) => {
      this.listCourse = res;
    });
  }

}
