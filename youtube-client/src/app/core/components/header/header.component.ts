import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

// const ButtonSettingsColorBase = '#2f80ed';
// const ButtonSettingsColorActive = '#0f3464';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private headerService: HeaderService, private router: Router) {}

  public valueSearch = '';

  public settingsState = this.headerService.stateSettings;

  public buttonSettingsColor: string = this.headerService.colorSettings;

  public onSearch() {
    this.headerService.search(this.valueSearch);
  }

  public showSettings() {
    this.headerService.toggleSettings();
    this.buttonSettingsColor = this.headerService.colorSettings;
  }

  public goToLogin() {
    this.router.navigate(['/login']);
  }
}
