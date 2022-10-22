import { Component, EventEmitter, Output } from '@angular/core';
import { SettingsSort, SettingsSortViewDirection } from '../../constants/settings.constat';
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
        this.sortSettings.viewSort[keyInner] = SettingsSortViewDirection.none;
        SettingsState.sort[keyInner] = SettingsSortViewDirection.none;
      }
    });
  }

  changeViewDirectionSort(sort: SettingsSortType) {
    this.clearInactiveViewSort(this.sortType);

    if (
      this.sortSettings.viewSort[sort] === SettingsSortViewDirection.none ||
      this.sortSettings.viewSort[sort] === SettingsSortViewDirection.desc
    ) {
      this.sortSettings.viewSort[sort] = SettingsSortViewDirection.asc;
      SettingsState.sort[sort] = SettingsSortViewDirection.asc;
      this.sortSettings.direction[sort] = SettingsSort.direction.asc;
    } else {
      this.sortSettings.viewSort[sort] = SettingsSortViewDirection.desc;
      SettingsState.sort[sort] = SettingsSortViewDirection.desc;
      this.sortSettings.direction[sort] = SettingsSort.direction.desc;
    }
  }

  onSortDate() {
    SettingsState.sortType = SettingsSort.type.date;
    this.sortType = SettingsSort.type.date;
    this.changeViewDirectionSort(this.sortType);
    this.sortDateEvent.emit(this.sortSettings.direction.date);
  }

  onSortCount() {
    SettingsState.sortType = SettingsSort.type.count;
    this.sortType = SettingsSort.type.count;
    this.changeViewDirectionSort(this.sortType);
    this.sortCountEvent.emit(this.sortSettings.direction.count);
  }

  onFilter() {
    SettingsState.filterWord = this.valueFilter;
    this.filterByWordEvent.emit(this.valueFilter);
  }
}
