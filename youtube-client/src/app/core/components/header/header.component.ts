import { Component, Output, EventEmitter } from '@angular/core';

const ButtonSettingsColorBase = '#2f80ed';
const ButtonSettingsColorActive = '#0f3464';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() valueSearchEvent = new EventEmitter();

  @Output() displaySettings = new EventEmitter();

  valueSearch = '';

  settingsState = false;

  buttonSettingsColor: string = ButtonSettingsColorBase;

  onSearch() {
    this.valueSearchEvent.emit(this.valueSearch);
  }

  showSettings() {
    this.settingsState = !this.settingsState;
    this.buttonSettingsColor = this.settingsState ? ButtonSettingsColorActive : ButtonSettingsColorBase;
    this.displaySettings.emit(this.settingsState);
  }
}
