import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { SettingsSort } from '../../constant/settings';
import { SettingsSortDirection, SettingsSortType } from '../../models/settings.model';
import { CardsStateService } from '../../services/cards-state.service';
import { SearchResultsService } from '../../services/search-results.service';

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
  constructor(
    private headerService: HeaderService,
    private searchResultService: SearchResultsService,
    private cardsStateService: CardsStateService,
  ) {
    this.headerService.displaySettings.subscribe((state) => {
      this.visibleSettings = state;
    });
    this.searchResultService.searchEvent.subscribe(() => {
      this.visibleCards = this.displayCards();
    });
  }

  visibleSettings = this.headerService.stateSettings;

  sendValueFilter = '';

  sendSettingsSort: SendSettingsSort = {
    sortType: SettingsSort.type.none,
    sortDirection: SettingsSort.direction.none,
  };

  visibleCards = this.displayCards();

  displayCards() {
    if (this.cardsStateService.state.length) {
      return true;
    }
    return false;
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
