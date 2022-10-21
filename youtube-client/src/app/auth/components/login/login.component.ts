import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthValidators } from './auth-validators';

const MinLengthPassword = 4;
const ValidationText = {
  login: {
    required: 'Please, enter email login',
    invalid: {
      common: 'Email is invalid',
    },
  },
  password: {
    required: 'Please, enter password',
    invalid: {
      common: 'Your password is not strong enough: ',
      minLength: ` - at least ${MinLengthPassword} characters`,
      lowerUpperCase: ' - Low and Uppercase letters',
      lettersAndNumbers: ' - Letters and numbers',
      specialCharacter: ' - at least one symbol from ! @ # $ %',
    },
  },
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: AuthService) {}

  public valueLogin = '';

  public valuePassword = '';

  // public isValidate = true;

  public formLogin!: FormGroup;

  protected message = ValidationText;

  ngOnInit() {
    this.formLogin = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(MinLengthPassword),
        AuthValidators.lowerUpperCase,
        AuthValidators.lettersAndNumbers,
        AuthValidators.specialCharacter,
      ]),
    });
  }

  // onLogin() {
  //   if (!this.valueLogin.length || !this.valuePassword.length) {
  //     this.viewInvalidValidate();
  //     return null;
  //   }
  //   this.loginService.user = this.valueLogin;
  //   this.loginService.password = this.valuePassword;
  //   this.loginService.login();
  //   return null;
  // }

  // checkValidate() {
  //   if (this.valueLogin === '' || this.valuePassword === '') {
  //     this.isValidate = false;
  //   }
  //   this.isValidate = true;
  // }

  // viewInvalidValidate() {
  //   this.isValidate = false;
  //   setTimeout(() => {
  //     this.isValidate = true;
  //   }, 3000);
  // }

  onSubmit() {
    if (this.formLogin.valid) {
      const formData = { ...this.formLogin.value };

      this.loginService.user = formData.login;
      this.loginService.password = formData.password;
      this.loginService.login();

      // delete
      console.log(formData);
      this.valueLogin = formData.login;
      this.valuePassword = formData.password;
    }
  }

  onLogout() {
    this.loginService.logout();
  }
}
