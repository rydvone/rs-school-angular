import { FormControl } from '@angular/forms';
import { ValidationResult } from '../models/validator.model';

export function lettersAndNumbersValidator(control: FormControl): ValidationResult | null {
  const hasNumber = /\d/.test(control.value);
  const hasLetter = /[a-zA-Z]/.test(control.value);
  const isValid = hasNumber && hasLetter;
  if (!isValid) {
    return { lettersAndNumbers: true };
  }
  return null;
}
