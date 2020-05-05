import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "like-button",
  templateUrl: "./like-button.component.html",
  styleUrls: ["like-button.component.css"],
})
export class LikeButtonComponent {
  @Input("isLiked") isLiked: boolean;
  @Output() change = new EventEmitter();

  heart =
    "https://cdn.clipart.email/e9ab6b9f75197f6122f8236d6da5a2c0_black-and-white-heart-transparent-background-png-cliparts-free-_512-512.jpeg";

  onClick() {
    this.isLiked = !this.isLiked;
    this.change.emit(this.isLiked);
  }
}
