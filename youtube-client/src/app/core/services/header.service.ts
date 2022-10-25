import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchResultsService } from 'src/app/youtube/services/search-results.service';
import { SettingsButtonColor } from '../constant/header.constant';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  @Output() displaySettings = new EventEmitter();

  public isLoad$: Observable<boolean>;

  private isLoad$$ = new BehaviorSubject(false);

  constructor(private searchResultsService: SearchResultsService) {
    this.isLoad$ = this.isLoad$$.asObservable();
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
    this.isLoad$$.next(true);
  }

  private hideSetting() {
    this.isLoad$$.next(false);
  }
}
