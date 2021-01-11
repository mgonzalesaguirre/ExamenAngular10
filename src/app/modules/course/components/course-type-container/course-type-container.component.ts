import { Component, OnInit, Input } from '@angular/core';
import { IType } from '../course-type-container/interfaces/type';

@Component({
  selector: 'app-course-type-container',
  templateUrl: './course-type-container.component.html',
  styleUrls: ['./course-type-container.component.scss']
})
export class CourseTypeContainerComponent implements OnInit {

  listCourseType: IType[];

  @Input() type: IType;

  constructor() { }

  ngOnInit(): void {
    this.listCourseType = [
      {
        id: 1,
        name: 'Diseño'
      },
      {
        id: 2,
        name: 'Desarrollo'
      },
      {
        id: 3,
        name: 'Tecnologías de la Información'
      }
    ];
  }
}
