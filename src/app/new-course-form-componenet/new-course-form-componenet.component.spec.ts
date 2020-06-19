import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFormComponenetComponent } from './new-course-form-componenet.component';

describe('NewCourseFormComponenetComponent', () => {
  let component: NewCourseFormComponenetComponent;
  let fixture: ComponentFixture<NewCourseFormComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseFormComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFormComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
