import { Component } from "@angular/core";
import { AuthorsService } from "./authors.service";

@Component({
  selector: "authors",
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let author of authors">{{ author }}</li>
    </ul>
  `
})
export class AuthorsComponent {
  title = "Authors";
  authors;
  constructor(authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
  }
}
