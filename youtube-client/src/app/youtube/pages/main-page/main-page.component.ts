import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { SETTINGS_SORT } from '../../constants/settings.constat';
import { SettingsSortDirection, SettingsSortType } from '../../models/settings.model';
import { CardsStateService } from '../../services/cards-state.service';

export interface SortingSettings {
  sortType: SettingsSortType;
  sortDirection: SettingsSortDirection;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private headerService: HeaderService, protected cardsState: CardsStateService) {}

  ngOnInit(): void {
    this.headerService.displaySettings.subscribe((state) => {
      this.visibleSettings = state;
    });
  }

  visibleSettings = this.headerService.stateSettings;

  sendValueFilter = '';

  sendSettingsSort: SortingSettings = {
    sortType: SETTINGS_SORT.type.none,
    sortDirection: SETTINGS_SORT.direction.none,
  };

  onSortDateEvent(sortDirection: SettingsSortDirection) {
    this.sendSettingsSort.sortType = SETTINGS_SORT.type.date;
    this.sendSettingsSort.sortDirection = sortDirection;
  }

  onSortCountEvent(sortDirection: SettingsSortDirection) {
    this.sendSettingsSort.sortType = SETTINGS_SORT.type.count;
    this.sendSettingsSort.sortDirection = sortDirection;
  }

  onFilterByWordEvent(valueFilter: string) {
    this.sendValueFilter = valueFilter;
  }
}
