import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { SettingsSort } from '../../constant/settings';
import { SettingsSortDirection, SettingsSortType } from '../../models/settings.model';

export interface SendSettingsSort {
  sortType: SettingsSortType;
  sortDirection: SettingsSortDirection;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private headerService: HeaderService) {
    this.headerService.displaySettings.subscribe((state) => {
      this.visibleSettings = state;
    });
    this.headerService.searchEvent.subscribe((value: string) => {
      this.onSearchEvent(value);
    });
  }

  visibleSettings = this.headerService.stateSettings;

  sendSearchResult = '';

  sendValueFilter = '';

  sendSettingsSort: SendSettingsSort = {
    sortType: SettingsSort.type.none,
    sortDirection: SettingsSort.direction.none,
  };

  visibleCards = false;

  onSearchEvent(valueSearch: string) {
    if (valueSearch) {
      this.visibleCards = true;
    } else {
      this.visibleCards = false;
    }
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
