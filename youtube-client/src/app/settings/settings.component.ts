import { Component, EventEmitter, Output } from '@angular/core';
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

  valueFilter = '';

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
        console.log(key);
        this.outputEventSettings[key as keyof OutputEventSettings].active = true;
      } else this.outputEventSettings[key as keyof OutputEventSettings].active = false;
    });
  }

  sortSet = SettingsState.sortSet;

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
    SettingsState.sortSet = 'sortDate';
    this.sortSet = 'sortDate';
    this.showDirection(this.sortSet);
    if (this.viewSortCount === this.sortOrderView.none || this.viewSortCount === this.sortOrderView.desc) {
      this.viewSortCount = this.sortOrderView.asc;
      SettingsState[SettingsState.sortSet].direction = true;
    } else {
      this.viewSortCount = this.sortOrderView.desc;
      SettingsState[SettingsState.sortSet].direction = false;
    }
  }

  onSortCount() {
    SettingsState.sortSet = 'sortCount';
    this.sortSet = 'sortCount';
    if (this.viewSortCount === this.sortOrderView.none || this.viewSortCount === this.sortOrderView.desc) {
      this.viewSortCount = this.sortOrderView.asc;
      SettingsState[SettingsState.sortSet].direction = true;
    } else {
      this.viewSortCount = this.sortOrderView.desc;
      SettingsState[SettingsState.sortSet].direction = false;
    }
  }

  onFilter() {
    this.setActiveEvent('buttonFilterByWord');
    this.outputEventSettings.buttonFilterByWord.value = this.valueFilter;
    this.settingsEvent.emit(this.outputEventSettings);
  }
}
