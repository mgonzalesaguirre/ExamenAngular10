import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../course/interfaces/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: ICourse[];
  @Input() coverWidth: number;

  constructor() { }

  ngOnInit(): void {
      this.course = [{
        id: 1,
        name: 'Angular 10',
        featured: true,
        image: 'http://examen-nh.jcramireztello.com/media/books/angular10.png',
        language: 'es',
        price: 5000.0,
        duration: 40,
        lessons: 7,
        deadline: '2021-01-09',
        students: 20,
        summary: 'Angular es el framework para JavaScript estándapulares para dilarJS. Ahora utilizaremos TypeScel framework.',
        instructor: 1,
        category: 2
    }];
  }

}
