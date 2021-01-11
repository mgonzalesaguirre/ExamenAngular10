import { Component, OnInit, Input } from '@angular/core';
import { IInstructor } from '../instructor/interfaces/instructor';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  @Input() instructor: IInstructor[];
  @Input() coverWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.instructor = [{
        id: 2,
        name: 'Ebed',
        lastName: 'Guerra',
        educationTitle: 'Desing Teacher',
        image: 'http://examen-nh.jcramireztello.com/media/instructor/01.jpg'
    }];
  }

}
