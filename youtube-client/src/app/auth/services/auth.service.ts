import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginVariableNames } from '../constants/login.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogin = false;

  constructor(private router: Router) {}

  public tokenKey = 'QweAsdZcx';

  public token = '';

  public user = '';

  public password = '';

  private makeToken() {
    return `${this.user}#${this.password}`;
  }

  public login() {
    this.isLogin = true;
    this.setAuth();
  }

  public logout() {
    this.isLogin = false;
    localStorage.removeItem(LoginVariableNames.token);
    this.router.navigate(['/login']);
  }

  public isLocalStorageLogin() {
    const token = !!localStorage.getItem(LoginVariableNames.token);
    return token;
  }

  public setAuth() {
    const token = this.makeToken();
    localStorage.setItem(LoginVariableNames.token, token);
    this.router.navigate(['/main']);
  }
}
