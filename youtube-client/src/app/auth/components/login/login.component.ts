import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: AuthService) {}

  public valueNickname = '';

  public valuePassword = '';

  public isValidate = true;

  onLogin() {
    if (!this.valueNickname.length || !this.valuePassword.length) {
      this.viewInvalidValidate();
      return null;
    }
    this.loginService.user = this.valueNickname;
    this.loginService.password = this.valuePassword;
    this.loginService.login();
    return null;
  }

  onLogout() {
    this.loginService.logout();
  }

  checkValidate() {
    if (this.valueNickname === '' || this.valuePassword === '') {
      this.isValidate = false;
    }
    this.isValidate = true;
  }

  viewInvalidValidate() {
    this.isValidate = false;
    setTimeout(() => {
      this.isValidate = true;
    }, 3000);
  }
}
