import { Component, EventEmitter, Output } from '@angular/core';
import { SettingsSort } from '../const/settings';
import { SettingsState } from '../models/settings.state';

export interface OutputEventSettings {
  buttonSortDate: {
    active: boolean;
    value: string;
  };
  buttonSortCount: {
    active: boolean;
    value: string;
  };
  buttonFilterByWord: {
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

  outputEventSettings = {
    buttonSortDate: {
      active: false,
      value: '',
    },
    buttonSortCount: {
      active: false,
      value: '',
    },
    buttonFilterByWord: {
      active: false,
      value: '',
    },
  };

  setActiveEvent(value: string) {
    Object.keys(this.outputEventSettings).forEach((key) => {
      if (key === value) {
        this.outputEventSettings[key as keyof OutputEventSettings].active = true;
      } else this.outputEventSettings[key as keyof OutputEventSettings].active = false;
    });
  }

  sortOrderView = {
    none: '&nbsp;',
    asc: '&uarr;',
    desc: '&darr;',
  };

  viewSort = {
    sortDate: '&nbsp;',
    sortCount: '&nbsp;',
  };

  viewSortDate = '&nbsp;';

  viewSortCount = '&nbsp;';

  showDirection(sort: 'sortDate' | 'sortCount') {
    if (this.viewSort[sort] === this.sortOrderView.none || this.viewSort[sort] === this.sortOrderView.desc) {
      this.viewSort[sort] = this.sortOrderView.asc;
      SettingsState[sort].direction = true;
    } else {
      this.viewSort[sort] = this.sortOrderView.desc;
      SettingsState[sort].direction = false;
    }
  }

  onSortDate() {
    this.setActiveEvent('buttonSortDate');

    SettingsState.sortSet = 'sortDate';
    this.sortSet = 'sortDate';
    this.showDirection(this.sortSet);
    if (this.viewSortCount === this.sortOrderView.none || this.viewSortCount === this.sortOrderView.desc) {
      this.viewSortCount = this.sortOrderView.asc;
      SettingsState[SettingsState.sortSet].direction = true;
      this.outputEventSettings.buttonSortDate.value = SettingsSort.direction.asc;
    } else {
      this.viewSortCount = this.sortOrderView.desc;
      SettingsState[SettingsState.sortSet].direction = false;
      this.outputEventSettings.buttonSortDate.value = SettingsSort.direction.desc;
    }
    this.settingsEvent.emit(this.outputEventSettings);
  }

  onSortCount() {
    this.setActiveEvent('buttonSortCount');

    SettingsState.sortSet = 'sortCount';
    this.sortSet = 'sortCount';
    this.showDirection(this.sortSet);
    if (this.viewSortCount === this.sortOrderView.none || this.viewSortCount === this.sortOrderView.desc) {
      this.viewSortCount = this.sortOrderView.asc;
      SettingsState[SettingsState.sortSet].direction = true;
      this.outputEventSettings.buttonSortCount.value = SettingsSort.direction.asc;
    } else {
      this.viewSortCount = this.sortOrderView.desc;
      SettingsState[SettingsState.sortSet].direction = false;
      this.outputEventSettings.buttonSortCount.value = SettingsSort.direction.desc;
    }
    this.settingsEvent.emit(this.outputEventSettings);
  }

  onFilter() {
    this.setActiveEvent('buttonFilterByWord');
    SettingsState.filterWord.value = this.valueFilter;
    this.outputEventSettings.buttonFilterByWord.value = this.valueFilter;
    this.settingsEvent.emit(this.outputEventSettings);
  }
}
