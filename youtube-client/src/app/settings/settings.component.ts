import { Component } from '@angular/core';
import { SettingsState } from '../models/settings.state';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
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
}
