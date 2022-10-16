import { Component, Output, EventEmitter } from '@angular/core';
import { HeaderService } from '../../services/header.service';

// const ButtonSettingsColorBase = '#2f80ed';
// const ButtonSettingsColorActive = '#0f3464';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private headerService: HeaderService) {}

  valueSearch = '';

  settingsState = this.headerService.stateSettings;

  buttonSettingsColor: string = this.headerService.colorSettings;

  onSearch() {
    this.headerService.search(this.valueSearch);
  }

  showSettings() {
    this.headerService.toggleSettings();
    this.buttonSettingsColor = this.headerService.colorSettings;
  }
}
