import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../course/interfaces/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: ICourse;
  @Input() coverWidth: number;

  constructor() { }

  ngOnInit(): void {

  }

}
