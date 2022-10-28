import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isLogin = this.loginService.checkLocalStorage();
    if (isLogin) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
