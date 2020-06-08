import { Component } from "@angular/core";

@Component({
  selector: "course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.css"],
})
export class CourseFormComponent {
  categoryList = [
    { name: "Development", id: 1 },
    { name: "Arts", id: 2 },
    { name: "Cooking", id: 3 },
  ];
  submit(f) {
    console.log(f);
  }
}
