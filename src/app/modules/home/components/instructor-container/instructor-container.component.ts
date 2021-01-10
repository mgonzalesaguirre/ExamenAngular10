import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-container',
  templateUrl: './instructor-container.component.html',
  styleUrls: ['./instructor-container.component.scss']
})
export class InstructorContainerComponent implements OnInit {

  listInstructor: any[];

  constructor() { }

  ngOnInit(): void {

  }

}
