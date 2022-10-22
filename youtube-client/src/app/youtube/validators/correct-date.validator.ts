import { FormControl } from '@angular/forms';
import { ValidationResult } from '../models/validator.model';

export function correctDateValidator(control: FormControl): ValidationResult | null {
  const currentDate = Date.now();
  const publicationDate = new Date(control.value).getTime();
  if (publicationDate > currentDate) {
    return { correctDate: true };
  }
  return null;
}
