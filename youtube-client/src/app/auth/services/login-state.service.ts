import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginStateService {
  private login: string = '';

  public get nickname() {
    return this.login;
  }

  public set nickname(data: string) {
    this.login = data;
  }
}
