import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <div>
      <p>Make a vote on your favorite course!</p>
      <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" class="input" />
      <button
        class="btn btn-primary"
        [class.active]="isActive"
        (click)="onSave($event)"
      >
        Save
      </button>
    </div>
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  email = "";
  isActive = false;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onSave($event) {
    $event.stopPropagation();
    alert("Delete all changes?");
  }

  onKeyUp() {
    alert(this.email);
  }
}
