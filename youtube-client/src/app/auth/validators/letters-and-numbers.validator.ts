import { FormControl } from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export function lettersAndNumbersValidator(control: FormControl): ValidationResult | null {
  const hasNumber = /\d/.test(control.value);
  const hasLetter = /[a-zA-Z]/.test(control.value);
  const valid = hasNumber && hasLetter;
  if (!valid) {
    return { lettersAndNumbers: true };
  }
  return null;
}
