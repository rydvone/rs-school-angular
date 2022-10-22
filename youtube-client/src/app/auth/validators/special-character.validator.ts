import { FormControl } from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export function specialCharacterValidator(control: FormControl): ValidationResult | null {
  const hasSpecial = /[!@#$%]/.test(control.value);
  const valid = hasSpecial;
  if (!valid) {
    return { specialCharacter: true };
  }
  return null;
}
