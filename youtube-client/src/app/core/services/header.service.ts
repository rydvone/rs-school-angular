import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchResultsService } from 'src/app/youtube/services/search-results.service';
import { SettingsButtonColor } from '../constant/header.constant';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  @Output() displaySettings = new EventEmitter();

  public isLoading$: Observable<boolean>;

  private isLoading$$ = new BehaviorSubject(false);

  constructor(private searchResultsService: SearchResultsService) {
    this.isLoading$ = this.isLoading$$.asObservable();
  }

  public stateSettings = false;

  public colorSettings = SettingsButtonColor.inactive;

  public toggleSettings() {
    this.stateSettings = !this.stateSettings;
    this.colorSettings = this.stateSettings ? SettingsButtonColor.active : SettingsButtonColor.inactive;
    this.displaySettings.emit(this.stateSettings);
  }

  public search(searchRequest: string) {
    this.searchResultsService.getCards(searchRequest);
    this.showSetting();
  }

  private showSetting() {
    this.isLoading$$.next(true);
  }

  private hideSetting() {
    this.isLoading$$.next(false);
  }
}
