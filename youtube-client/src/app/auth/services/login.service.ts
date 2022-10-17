import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginVariableNames } from '../constant/login.constant';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLogin = false;

  constructor(private router: Router) {}

  public tokenKey = 'QweAsdZcx';

  public token = '';

  public user = '';

  public password = '';

  public getIdFromUser(user: string) {
    const userId = user.split(' ').join('&');
    return userId;
  }

  public getUserFromId(userId: string) {
    const user = userId.split('&').join(' ');
    return user;
  }

  public getToken() {
    return `${this.user}${this.password}`;
  }

  public login() {
    this.isLogin = true;
    this.setAuth();
  }

  public logout() {
    localStorage.removeItem(LoginVariableNames.token);
    this.isLogin = false;
    this.router.navigate(['/login']);
  }

  public checkLogin() {
    const token = localStorage.getItem(LoginVariableNames.token);
    let stateLogin = false;
    if (token) {
      stateLogin = true;
    }
    return stateLogin;
  }

  public setAuth() {
    const token = this.getToken();
    localStorage.setItem(LoginVariableNames.token, token);
    this.router.navigate(['/main']);
  }
}
