import { FormControl } from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export function lowAndUpperCaseValidator(control: FormControl): ValidationResult | null {
  const hasUpper = /[A-Z]/.test(control.value);
  const hasLower = /[a-z]/.test(control.value);
  const valid = hasUpper && hasLower;
  if (!valid) {
    return { lowAndUpperCase: true };
  }
  return null;
}
