import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public isMainPage$ = new BehaviorSubject<boolean>(true);

  public isMainPage(): Observable<boolean> {
    return this.isMainPage$.asObservable();
  }
}
