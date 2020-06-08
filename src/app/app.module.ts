import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CoursesService } from "./courses.service";
import { AuthorsComponent } from "./authors.component";
import { AuthorsService } from "./authors.service";
import { PictureComponent } from "./picture/picture.component";
import { LikeButtonComponent } from "./like-button/like-button.component";
import { BootstrapPanelComponent } from "./bootstrap-panel/bootstrap-panel.component";
import { ReusableLikeButtonComponent } from "./reusable-like-button/reusable-like-button.component";
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    PictureComponent,
    LikeButtonComponent,
    BootstrapPanelComponent,
    ReusableLikeButtonComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
  ],
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
