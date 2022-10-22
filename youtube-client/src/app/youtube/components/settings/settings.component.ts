import { Component, EventEmitter, Output } from '@angular/core';
import { SETTINGS_SORT, SETTINGS_SORT_VIEW_DIRECTION } from '../../constants/settings.constat';
import { SettingsSortType } from '../../models/settings.model';
import { SettingsState } from '../../models/settings.state';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Output() sortDateEvent = new EventEmitter();

  @Output() sortCountEvent = new EventEmitter();

  @Output() filterByWordEvent = new EventEmitter();

  valueFilter = SettingsState.filterWord;

  sortType = SettingsState.sortType;

  sortSettings = {
    direction: {
      none: '',
      date: '',
      count: '',
    },
    viewSort: {
      none: SettingsState.sort.none,
      date: SettingsState.sort.date,
      count: SettingsState.sort.count,
    },
  };

  clearInactiveViewSort(sort: SettingsSortType) {
    Object.keys(this.sortSettings.viewSort).forEach((key) => {
      const keyInner = key as SettingsSortType;
      if (keyInner !== sort) {
        this.sortSettings.viewSort[keyInner] = SETTINGS_SORT_VIEW_DIRECTION.none;
        SettingsState.sort[keyInner] = SETTINGS_SORT_VIEW_DIRECTION.none;
      }
    });
  }

  changeViewDirectionSort(sort: SettingsSortType) {
    this.clearInactiveViewSort(this.sortType);

    if (
      this.sortSettings.viewSort[sort] === SETTINGS_SORT_VIEW_DIRECTION.none ||
      this.sortSettings.viewSort[sort] === SETTINGS_SORT_VIEW_DIRECTION.desc
    ) {
      this.sortSettings.viewSort[sort] = SETTINGS_SORT_VIEW_DIRECTION.asc;
      SettingsState.sort[sort] = SETTINGS_SORT_VIEW_DIRECTION.asc;
      this.sortSettings.direction[sort] = SETTINGS_SORT.direction.asc;
    } else {
      this.sortSettings.viewSort[sort] = SETTINGS_SORT_VIEW_DIRECTION.desc;
      SettingsState.sort[sort] = SETTINGS_SORT_VIEW_DIRECTION.desc;
      this.sortSettings.direction[sort] = SETTINGS_SORT.direction.desc;
    }
  }

  onSortDate() {
    SettingsState.sortType = SETTINGS_SORT.type.date;
    this.sortType = SETTINGS_SORT.type.date;
    this.changeViewDirectionSort(this.sortType);
    this.sortDateEvent.emit(this.sortSettings.direction.date);
  }

  onSortCount() {
    SettingsState.sortType = SETTINGS_SORT.type.count;
    this.sortType = SETTINGS_SORT.type.count;
    this.changeViewDirectionSort(this.sortType);
    this.sortCountEvent.emit(this.sortSettings.direction.count);
  }

  onFilter() {
    SettingsState.filterWord = this.valueFilter;
    this.filterByWordEvent.emit(this.valueFilter);
  }
}
