import { Component } from "@angular/core";
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { UsernameValidators } from "../signup-form/username.validators";

@Component({
  selector: "form-change-password",
  templateUrl: "./form-change-password.component.html",
  styleUrls: ["./form-change-password.component.css"],
})
export class FormChangePasswordComponent {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            // UsernameValidators.isOldPassword,
          ],
        ],
        newPassword: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(6)]],
      },
      {
        validator: UsernameValidators.sameAsNewPassword,
      }
    );
  }

  get newPassword() {
    return this.form.get("newPassword") as FormControl;
  }

  get oldPassword() {
    return this.form.get("oldPassword");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}
