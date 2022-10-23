import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LOGIN_VARIABLE_NAMES } from '../constants/login.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogin$: Observable<boolean>;

  public username$: Observable<string>;

  private isLogin$$ = new BehaviorSubject(false);

  private username$$ = new BehaviorSubject('');

  constructor(private router: Router) {
    this.isLogin$ = this.isLogin$$.asObservable();
    this.username$ = this.username$$.asObservable();
  }

  public login(user: string, password: string) {
    this.show();
    this.setAuth(user, password);
  }

  public logout() {
    this.setUsername('');
    this.hide();
    localStorage.removeItem(LOGIN_VARIABLE_NAMES.token);
    this.router.navigate(['/login']);
  }

  public isLocalStorageLogin() {
    const token = !!localStorage.getItem(LOGIN_VARIABLE_NAMES.token);
    if (token) {
      this.show();
    } else {
      this.hide();
    }
    return token;
  }

  public isUsername() {
    if (this.isLocalStorageLogin()) {
      const token = localStorage.getItem('token');
      const user = token?.split('#') as [string];
      this.setUsername(user[0]);
    }
  }

  private setAuth(user: string, password: string) {
    this.setUsername(user);
    const token = `${user}#${password}`;
    localStorage.setItem(LOGIN_VARIABLE_NAMES.token, token);
    this.router.navigate(['/main']);
  }

  private show() {
    this.isLogin$$.next(true);
  }

  private hide() {
    this.isLogin$$.next(false);
  }

  private setUsername(user: string) {
    this.username$$.next(user);
  }
}
