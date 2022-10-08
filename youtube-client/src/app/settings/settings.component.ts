import { Component, EventEmitter, Output } from '@angular/core';
import { SettingsSort, SettingsSortFilterName, SettingsSortViewDirection } from '../const/settings';
import { SettingsState } from '../models/settings.state';

export interface OutputEventSettings {
  sortDate: {
    active: boolean;
    value: string;
  };
  sortCount: {
    active: boolean;
    value: string;
  };
  filterByWord: {
    active: boolean;
    value: string;
  };
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Output() settingsEvent = new EventEmitter();

  valueFilter = SettingsState.filterWord.value;

  sortSet = SettingsState.sortSet;

  viewSort = {
    sortDate: SettingsState.sortDate,
    sortCount: SettingsState.sortCount,
  };

  outputEventSettings = {
    sortDate: {
      active: false,
      value: '',
    },
    sortCount: {
      active: false,
      value: '',
    },
    filterByWord: {
      active: false,
      value: '',
    },
  };

  setActiveEvent(value: string) {
    Object.keys(this.outputEventSettings).forEach((key) => {
      if (key === value) {
        this.outputEventSettings[key as keyof OutputEventSettings].active = true;
      } else {
        this.outputEventSettings[key as keyof OutputEventSettings].active = false;
        SettingsState[key as 'sortDate' | 'sortCount'] = SettingsSortViewDirection.none;
        this.viewSort[key as 'sortDate' | 'sortCount'] = SettingsSortViewDirection.none;
      }
    });
  }

  changeDirectionSort(sort: 'sortDate' | 'sortCount') {
    if (
      this.viewSort[sort] === SettingsSortViewDirection.none ||
      this.viewSort[sort] === SettingsSortViewDirection.desc
    ) {
      this.viewSort[sort] = SettingsSortViewDirection.asc;
      SettingsState[sort] = SettingsSortViewDirection.asc;
      this.outputEventSettings[sort].value = SettingsSort.direction.asc;
    } else {
      this.viewSort[sort] = SettingsSortViewDirection.desc;
      SettingsState[sort] = SettingsSortViewDirection.desc;
      this.outputEventSettings[sort].value = SettingsSort.direction.desc;
    }
  }

  onSortDate() {
    SettingsState.sortSet = SettingsSortFilterName.date;
    this.sortSet = SettingsSortFilterName.date;
    this.changeDirectionSort(this.sortSet as 'sortDate' | 'sortCount');
    this.setActiveEvent(SettingsSortFilterName.date);
    this.settingsEvent.emit(this.outputEventSettings);
  }

  onSortCount() {
    SettingsState.sortSet = SettingsSortFilterName.count;
    this.sortSet = SettingsSortFilterName.count;
    this.changeDirectionSort(this.sortSet as 'sortDate' | 'sortCount');
    this.setActiveEvent(SettingsSortFilterName.count);
    this.settingsEvent.emit(this.outputEventSettings);
  }

  onFilter() {
    this.setActiveEvent(SettingsSortFilterName.filter);
    SettingsState.filterWord.value = this.valueFilter;
    this.outputEventSettings.filterByWord.value = this.valueFilter;
    this.settingsEvent.emit(this.outputEventSettings);
  }
}
