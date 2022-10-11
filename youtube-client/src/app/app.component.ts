import { Component } from '@angular/core';
import { SettingsSort } from './constant/settings';
import { SettingsSortDirection, SettingsSortType } from './models/settings.model';

export interface SendSettingsSort {
  sortType: SettingsSortType;
  sortDirection: SettingsSortDirection;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  sendSearchResult = '';

  sendValueFilter = '';

  sendSettingsSort: SendSettingsSort = {
    sortType: SettingsSort.type.none,
    sortDirection: SettingsSort.direction.none,
  };

  visibleCards = false;

  visibleSettings = false;

  onValueSearchEvent(valueSearch: string) {
    if (valueSearch) {
      this.visibleCards = true;
    } else {
      this.visibleCards = false;
    }
  }

  onDisplaySettings(display: boolean) {
    this.visibleSettings = display;
  }

  onSortDateEvent(sortDirection: SettingsSortDirection) {
    this.sendSettingsSort.sortType = SettingsSort.type.date;
    this.sendSettingsSort.sortDirection = sortDirection;
  }

  onSortCountEvent(sortDirection: SettingsSortDirection) {
    this.sendSettingsSort.sortType = SettingsSort.type.count;
    this.sendSettingsSort.sortDirection = sortDirection;
  }

  onFilterByWordEvent(valueFilter: string) {
    this.sendValueFilter = valueFilter;
  }
}
