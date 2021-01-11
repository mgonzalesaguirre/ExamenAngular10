import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IType } from '../components/course-type-container/interfaces/type';

@Injectable({
  providedIn: 'root'
})
export class TypecourseService {

  url = 'http://examen-nh.jcramireztello.com/api/v1/course/category/';

  constructor(private http: HttpClient) {
  }

  getTypeCourse() {
    return this.http.get<IType[]>(`${this.url}`);
  }

}
