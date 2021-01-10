import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-top-container',
  templateUrl: './course-top-container.component.html',
  styleUrls: ['./course-top-container.component.scss']
})
export class CourseTopContainerComponent implements OnInit {

  topCourse: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
