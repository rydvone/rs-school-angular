import { Component } from '@angular/core';
import { OutputEventHeader } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  sendSearchResult!: string;

  visibleCards = false;

  visibleSettings = false;

  onEventHeader(eventHeader: OutputEventHeader) {
    if (eventHeader.buttonSearch.active) {
      this.sendSearchResult = eventHeader.buttonSearch.value;
      console.log(eventHeader.buttonSearch.value);
      this.visibleCards = true;
    }
    if (eventHeader.buttonSettings.active) {
      this.visibleSettings = eventHeader.buttonSettings.visible;
    }
  }
}
