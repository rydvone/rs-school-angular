import { Component, Output, EventEmitter } from '@angular/core';

export interface OutputEventHeader {
  buttonSearch: {
    active: boolean;
    value: string;
  };
  buttonSettings: {
    active: boolean;
    visible: boolean;
  };
}
const ButtonSettingsColorBase = '#2f80ed';
const ButtonSettingsColorActive = '#0f3464';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() headerEvent = new EventEmitter();

  valueSearch = '';

  buttonSettingsColor: string = ButtonSettingsColorBase;

  outputEventHeader = {
    buttonSearch: {
      active: false,
      value: '',
    },
    buttonSettings: {
      active: false,
      visible: false,
    },
  };

  setActiveEvent(value: string) {
    Object.keys(this.outputEventHeader).forEach((key) => {
      if (key === value) {
        this.outputEventHeader[key as keyof OutputEventHeader].active = true;
      } else this.outputEventHeader[key as keyof OutputEventHeader].active = false;
    });
  }

  onSearch() {
    this.setActiveEvent('buttonSearch');

    if (this.valueSearch !== '') {
      this.outputEventHeader.buttonSearch.value = this.valueSearch;
      this.headerEvent.emit(this.outputEventHeader);
    }
  }

  showSettings() {
    this.setActiveEvent('buttonSettings');

    this.outputEventHeader.buttonSettings.visible = !this.outputEventHeader.buttonSettings.visible;
    this.buttonSettingsColor = this.outputEventHeader.buttonSettings.visible
      ? ButtonSettingsColorActive
      : ButtonSettingsColorBase;
    this.headerEvent.emit(this.outputEventHeader);
  }
}
