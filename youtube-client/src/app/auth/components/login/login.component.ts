import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  public valueNickname = '';

  public valuePassword = '';

  public isValidate = true;

  onLogin() {
    this.checkValidate();
    if (!this.isValidate) {
      return null;
    }
    console.log('login = ', this.valueNickname, ' pass = ', this.valuePassword, 'isValidate', this.isValidate);
    this.loginService.user = this.valueNickname;
    this.loginService.password = this.valuePassword;
    this.loginService.login();
    return null;
  }

  onLogout() {
    console.log('login = ', this.valueNickname, ' pass = ', this.valuePassword);
    this.loginService.logout();
  }

  checkValidate() {
    if (this.valueNickname === '' || this.valuePassword === '') {
      this.isValidate = false;
    }
    this.isValidate = true;
  }
}
