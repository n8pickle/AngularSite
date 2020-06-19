import { AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static isOldPassword(control: AbstractControl): ValidationErrors | null {
    if (control.value != "password") {
      return { isOldPassword: true };
    }
    return null;
  }

  static sameAsNewPassword(control: AbstractControl): ValidationErrors | null {
    if (
      control.get("newPassword").value !== control.get("confirmPassword").value
    ) {
      return { sameAsNewPassword: true };
    }
    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "mosh") {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
