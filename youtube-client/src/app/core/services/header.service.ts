import { EventEmitter, Injectable, Output } from '@angular/core';
import { SearchResultsService } from 'src/app/youtube/services/search-results.service';
import { SettingsButtonColor } from '../constant/header.constant';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  @Output() displaySettings = new EventEmitter();

  constructor(private searchResultsService: SearchResultsService) {}

  public stateSettings = false;

  public colorSettings = SettingsButtonColor.inactive;

  toggleSettings() {
    this.stateSettings = !this.stateSettings;
    this.colorSettings = this.stateSettings ? SettingsButtonColor.active : SettingsButtonColor.inactive;
    this.displaySettings.emit(this.stateSettings);
  }

  search(value: string) {
    this.searchResultsService.getCards(value);
  }
}
