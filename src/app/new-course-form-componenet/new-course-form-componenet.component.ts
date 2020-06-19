import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "new-course-form-componenet",
  templateUrl: "./new-course-form-componenet.component.html",
  styleUrls: ["./new-course-form-componenet.component.css"],
})
export class NewCourseFormComponenetComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  addTopic(topic: HTMLInputElement) {
    (this.form.get("topics") as FormArray).push(new FormControl(topic.value));
    topic.value = "";
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get("topics") as FormArray;
  }
}
