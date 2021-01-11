import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from 'src/app/shared/components/course/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseTopService {

  url = 'http://examen-nh.jcramireztello.com/api/v1/course/';

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<ICourse[]>(`${this.url}`);
  }

  getTopCourses() {
    return this.http.get<ICourse[]>(`${this.url}?featured=true`);
  }

  getCoursesByType(id: number) {
    return this.http.get<ICourse[]>(`${this.url}?category=${id}`);
  }

  getCourseDetail(id: number){
    return this.http.get<ICourse>(`${this.url}${id}/`);
  }

}

