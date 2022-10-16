import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public valueNickname = '';

  public valuePassword = '';

  onLogIn() {
    console.log('login = ', this.valueNickname, ' pass = ', this.valuePassword);
  }
}
