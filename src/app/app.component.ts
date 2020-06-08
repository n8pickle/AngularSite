import { Component } from "@angular/core";
import { AuthorsService } from "./authors.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "AngularSite";
  contents = [];
  authors;
  viewMode = "somethingElse";
  post = {
    isLiked: false,
  };

  constructor(authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
  }

  onLikedChange(eventArgs) {
    console.log(eventArgs);
  }

  onAdd() {
    this.authors.push({ ranking: 4, name: "G. G. Martin" });
  }

  onRemove(author) {
    let index = this.authors.indexOf(author);
    this.authors.splice(index, 1);
  }
}
