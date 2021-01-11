import { Component, OnInit, Input } from '@angular/core';
import { TypecourseService } from '../../services/typecourse.service';
import { IType } from '../course-type-container/interfaces/type';

@Component({
  selector: 'app-course-type-container',
  templateUrl: './course-type-container.component.html',
  styleUrls: ['./course-type-container.component.scss']
})
export class CourseTypeContainerComponent implements OnInit {

  listCourseType: IType[];

  @Input() type: IType;

  constructor(private typecourseserv: TypecourseService) { 

  }

  ngOnInit(): void {
    this.getCourseTop();
  }

  getCourseTop(){
    this.typecourseserv.getTypeCourse()
    .subscribe((res: IType[]) => {
      this.listCourseType = res;
    });
  }
}
