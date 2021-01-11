import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInstructor } from '../interfaces/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  url = 'http://examen-nh.jcramireztello.com/api/v1/instructor';

  constructor(private http: HttpClient) {
  }

  getInstructor() {
    return this.http.get<IInstructor[]>(`${this.url}`);
  }
  
}
