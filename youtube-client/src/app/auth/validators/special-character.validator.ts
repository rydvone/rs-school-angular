import { FormControl } from '@angular/forms';
import { ValidationResult } from '../models/validator.model';

export function specialCharacterValidator(control: FormControl): ValidationResult | null {
  const hasSpecial = /[!@#$%]/.test(control.value);
  if (!hasSpecial) {
    return { specialCharacter: true };
  }
  return null;
}
