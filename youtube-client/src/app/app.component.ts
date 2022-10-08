import { Component } from '@angular/core';
import { SettingsSort } from './const/settings';
import { OutputEventHeader } from './header/header.component';
import { OutputEventSettings } from './settings/settings.component';

export interface SendSettingsSort {
  sortType: string;
  sortDirection: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  sendSearchResult!: string;

  sendValueFilter!: string;

  sendSettingsSort: SendSettingsSort = {
    sortType: SettingsSort.type.none,
    sortDirection: SettingsSort.direction.none,
  };

  visibleCards = false;

  visibleSettings = false;

  onEventHeader(eventHeader: OutputEventHeader) {
    if (eventHeader.buttonSearch.active) {
      this.sendSearchResult = eventHeader.buttonSearch.value;
      this.visibleCards = true;
    }
    if (eventHeader.buttonSettings.active) {
      this.visibleSettings = eventHeader.buttonSettings.visible;
    }
  }

  onEventSettings(eventSettings: OutputEventSettings) {
    if (eventSettings.sortDate.active) {
      this.sendSettingsSort.sortType = SettingsSort.type.date;
      this.sendSettingsSort.sortDirection = eventSettings.sortDate.value;
    }
    if (eventSettings.sortCount.active) {
      this.sendSettingsSort.sortType = SettingsSort.type.count;
      this.sendSettingsSort.sortDirection = eventSettings.sortCount.value;
    }
    if (eventSettings.filterByWord.active) {
      this.sendValueFilter = eventSettings.filterByWord.value;
    }
  }
}
