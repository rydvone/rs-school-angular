import { FormControl } from '@angular/forms';
import { ValidationResult } from '../models/validator.model';

export function lowAndUpperCaseValidator(control: FormControl): ValidationResult | null {
  const hasUpper = /[A-Z]/.test(control.value);
  const hasLower = /[a-z]/.test(control.value);
  const isValid = hasUpper && hasLower;
  if (!isValid) {
    return { lowAndUpperCase: true };
  }
  return null;
}
