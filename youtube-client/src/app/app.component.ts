import { Component } from '@angular/core';
import { SettingsSortDirection, SettingsSortType } from './youtube/models/settings.model';

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
}
