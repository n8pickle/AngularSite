import { Component, Input } from "@angular/core";

@Component({
  selector: "zippy",
  templateUrl: "./zippy.component.html",
  styleUrls: ["./zippy.component.css"],
})
export class ZippyComponent {
  isExpanded = false;
  @Input("title") title: string;
  constructor() {}

  onClick() {
    this.isExpanded = !this.isExpanded;
  }
}
