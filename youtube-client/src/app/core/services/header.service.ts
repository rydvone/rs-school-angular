import { EventEmitter, Injectable, Output } from '@angular/core';
import { SettingsButtonColor } from '../constant/header.constant';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  @Output() displaySettings = new EventEmitter();

  @Output() searchEvent = new EventEmitter();

  public stateSettings = false;

  public colorSettings = SettingsButtonColor.inactive;

  toggleSettings() {
    this.stateSettings = !this.stateSettings;
    this.colorSettings = this.stateSettings ? SettingsButtonColor.active : SettingsButtonColor.inactive;
    this.displaySettings.emit(this.stateSettings);
  }

  search(value: string) {
    this.searchEvent.emit(value);
  }
}
