import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginValidationText, MinLengthPassword } from '../../constants/login.constant';
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
  constructor(private authService: AuthService) {}

  public formLogin!: FormGroup;

  protected message = LoginValidationText;

  ngOnInit() {
    this.formLogin = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(MinLengthPassword),
        lowAndUpperCaseValidator,
        lettersAndNumbersValidator,
        specialCharacterValidator,
      ]),
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const formData = { ...this.formLogin.value };
      this.authService.user = formData.login;
      this.authService.password = formData.password;
      this.authService.login();
    }
  }

  onLogout() {
    this.authService.logout();
  }
}
