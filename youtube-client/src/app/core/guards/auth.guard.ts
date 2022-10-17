import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogin = this.checkLogin();
    console.log('isLOgin', isLogin);
    return isLogin;
  }

  private checkLogin() {
    const isLogin = this.loginService.checkLogin();
    if (isLogin) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
