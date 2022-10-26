import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LOGIN_VALIDATION_TEXT, MIN_LENGTH_PASSWORD } from '../../constants/login.constant';
import { AuthService } from '../../services/auth.service';
import { lettersAndNumbersValidator } from '../../validators/letters-and-numbers.validator';
import { lowAndUpperCaseValidator } from '../../validators/low-and-uppercase.validator';
import { specialCharacterValidator } from '../../validators/special-character.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(protected authService: AuthService) {}

  public formLogin!: FormGroup;

  protected message = LOGIN_VALIDATION_TEXT;

  ngOnInit() {
    this.authService.isLocalStorageLogin();

    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(MIN_LENGTH_PASSWORD),
        lowAndUpperCaseValidator,
        lettersAndNumbersValidator,
        specialCharacterValidator,
      ]),
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;
      this.authService.login(email, password);
      this.formLogin.reset();
    }
  }

  onLogout() {
    this.authService.logout();
  }

  hasFieldError(field: string, errorType: string): boolean {
    return this.formLogin.get(field)?.errors && this.formLogin.get(field)?.errors?.[errorType];
  }
}
