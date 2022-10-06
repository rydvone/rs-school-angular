import { Component, Output, EventEmitter } from '@angular/core';

const ButtonSettingsColorBase = '#2f80ed';
const ButtonSettingsColorActive = '#0f3464';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchResult = new EventEmitter();

  valueSearch = '';

  onSearch() {
    if (this.valueSearch !== '') {
      this.searchResult.emit(this.valueSearch);
    }
  }

  buttonSettingsColor: string = ButtonSettingsColorBase;

  visibleSettings: boolean = false;

  showSettings() {
    this.visibleSettings = !this.visibleSettings;
    this.buttonSettingsColor = this.visibleSettings ? ButtonSettingsColorActive : ButtonSettingsColorBase;
  }
}
