import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseTopService } from 'src/app/modules/home/services/course-top.service';
import { ICourse } from 'src/app/shared/components/course/interfaces/course';

@Component({
  selector: 'app-course-datail-page',
  templateUrl: './course-datail-page.component.html',
  styleUrls: ['./course-datail-page.component.scss']
})
export class CourseDatailPageComponent implements OnInit {

  course: ICourse;
  id: number;

  constructor(private activateRouter: ActivatedRoute,private courseserv: CourseTopService) { 
    activateRouter.params.subscribe( parametros => {
      this.id = parametros['id'];
    });
  }

  ngOnInit(): void {
    this.getCourseDetail(this.id);
   }

   getCourseDetail(id: number){
    this.courseserv.getCourseDetail(id)
    .subscribe((res: ICourse) => {
      this.course = res;
    });
  }

}
