import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_VARIABLE_NAMES } from '../constants/login.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogin = false;

  constructor(private router: Router) {}

  public login(user: string, password: string) {
    this.isLogin = true;
    this.setAuth(user, password);
  }

  public logout() {
    this.isLogin = false;
    localStorage.removeItem(LOGIN_VARIABLE_NAMES.token);
    this.router.navigate(['/login']);
  }

  public isLocalStorageLogin() {
    const token = !!localStorage.getItem(LOGIN_VARIABLE_NAMES.token);
    return token;
  }

  private setAuth(user: string, password: string) {
    const token = `${user}#${password}`;
    localStorage.setItem(LOGIN_VARIABLE_NAMES.token, token);
    this.router.navigate(['/main']);
  }
}
