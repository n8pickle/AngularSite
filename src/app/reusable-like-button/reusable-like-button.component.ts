import { Component, Input } from "@angular/core";

@Component({
  selector: "reusable-like-button",
  templateUrl: "./reusable-like-button.component.html",
  styleUrls: ["./reusable-like-button.component.css"],
})
export class ReusableLikeButtonComponent {
  @Input("isSelected") isSelected: boolean;
  selectedCount: number = 0;

  onClick() {
    if (this.isSelected) {
      this.selectedCount += 1;
    } else {
      this.selectedCount -= 1;
    }
    this.isSelected = !this.isSelected;
  }
}
