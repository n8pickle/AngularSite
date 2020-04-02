import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CoursesService } from "./courses.service";
import { AuthorsComponent } from "./authors.component";
import { AuthorsService } from "./authors.service";
import { PictureComponent } from "./picture/picture.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    PictureComponent
  ],
  imports: [BrowserModule],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
