import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorcontainerComponent } from './instructorcontainer.component';

describe('InstructorcontainerComponent', () => {
  let component: InstructorcontainerComponent;
  let fixture: ComponentFixture<InstructorcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
