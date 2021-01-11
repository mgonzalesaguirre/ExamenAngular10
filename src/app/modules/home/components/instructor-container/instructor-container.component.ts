import { Component, OnInit } from '@angular/core';
import { IInstructor } from '../../interfaces/instructor';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-instructor-container',
  templateUrl: './instructor-container.component.html',
  styleUrls: ['./instructor-container.component.scss']
})
export class InstructorContainerComponent implements OnInit {

  listInstructor: IInstructor[];

  constructor(private instserv: InstructorService) { 

  }

  ngOnInit(): void {
    this.getInstructor();
  }

  getInstructor(){
    this.instserv.getInstructor()
    .subscribe((res: IInstructor[]) => {
      this.listInstructor = res;
    });
  }

}

