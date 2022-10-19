import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

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
    this.headerService.search();
  }

  public showSettings() {
    this.headerService.toggleSettings();
    this.buttonSettingsColor = this.headerService.colorSettings;
  }

  public goToLogin() {
    this.router.navigate(['/login']);
  }
}
