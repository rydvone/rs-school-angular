import { Component } from '@angular/core';
import { OutputEventHeader } from './header/header.component';
import { OutputEventSettings } from './settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  sendSearchResult!: string;

  sendValueFilter!: string;

  visibleCards = false;

  visibleSettings = false;

  onEventHeader(eventHeader: OutputEventHeader) {
    if (eventHeader.buttonSearch.active) {
      this.sendSearchResult = eventHeader.buttonSearch.value;
      this.visibleCards = true;
    }
    if (eventHeader.buttonSettings.active) {
      this.visibleSettings = eventHeader.buttonSettings.visible;
    }
  }

  onEventSettings(eventSettings: OutputEventSettings) {
    if (eventSettings.buttonFilterByWord.active) {
      this.sendValueFilter = eventSettings.buttonFilterByWord.value;
    }
  }
}
