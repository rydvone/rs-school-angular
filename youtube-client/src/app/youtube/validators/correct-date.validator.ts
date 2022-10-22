import { FormControl } from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export function correctDateValidator(control: FormControl): ValidationResult | null {
  const currentDate = Date.now();
  const publicationDate = new Date(control.value).getTime();
  const valid = publicationDate <= currentDate;
  if (!valid) {
    return { correctDate: true };
  }
  return null;
}
