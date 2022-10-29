import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LOGIN_VARIABLE_NAMES } from '../constants/login.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogin$ = new BehaviorSubject(false);

  private displayUsername$ = new BehaviorSubject('');

  constructor(private router: Router) {}

  public login(user: string, password: string) {
    this.isLogin$.next(true);
    this.displayUsername$.next(user);
    this.saveToken(user, password);
    this.router.navigate(['/main']);
  }

  public logout() {
    this.isLogin$.next(false);
    this.displayUsername$.next('');
    localStorage.removeItem(LOGIN_VARIABLE_NAMES.token);
    this.router.navigate(['/login']);
  }

  private saveToken(user: string, password: string) {
    const token = `${user}#${password}`;
    localStorage.setItem(LOGIN_VARIABLE_NAMES.token, token);
  }

  public checkLocalStorage() {
    const token = !!localStorage.getItem(LOGIN_VARIABLE_NAMES.token);
    if (token) {
      this.isLogin$.next(true);
    } else {
      this.isLogin$.next(false);
    }
    return token;
  }

  public getUsername() {
    if (this.checkLocalStorage()) {
      const token = localStorage.getItem(LOGIN_VARIABLE_NAMES.token);
      const user = token?.split('#') as [string];
      this.displayUsername$.next(user[0]);
    }
  }

  public isLogin(): Observable<boolean> {
    return this.isLogin$.asObservable();
  }

  public displayUsername(): Observable<string> {
    return this.displayUsername$.asObservable();
  }
}
