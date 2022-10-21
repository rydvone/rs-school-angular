import { FormControl } from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export class AuthValidators {
  static lowerUpperCase(control: FormControl): ValidationResult | null {
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const valid = hasUpper && hasLower;
    if (!valid) {
      return { lowerUpperCase: true };
    }
    return null;
  }

  static lettersAndNumbers(control: FormControl): ValidationResult | null {
    const hasNumber = /\d/.test(control.value);
    const hasLetter = /[a-zA-Z]/.test(control.value);
    const valid = hasNumber && hasLetter;
    if (!valid) {
      return { lettersAndNumbers: true };
    }
    return null;
  }

  static specialCharacter(control: FormControl): ValidationResult | null {
    const hasSpecial = /[!@#$%]/.test(control.value);
    const valid = hasSpecial;
    if (!valid) {
      return { lettersAndNumbers: true };
    }
    return null;
  }
}
