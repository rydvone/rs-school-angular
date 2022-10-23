import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Subject } from 'rxjs';
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

  // https://angular.io/guide/practical-observable-usage#type-ahead-suggestions
  typeInSearch() {
    const inputSearch = document.getElementById('header__input-search') as HTMLInputElement;

    const typeText = fromEvent(inputSearch, 'input').pipe(
      map((e) => (e.target as HTMLInputElement).value),
      filter((text) => text.length > 3),
      debounceTime(1000),
      distinctUntilChanged(),
    );
    typeText.subscribe((data) => {
      console.log('searching: ', data);
      this.goToMain();
      this.headerService.search();
    });
  }

  protected showSettings() {
    this.headerService.toggleSettings();
    this.buttonSettingsColor = this.headerService.colorSettings;
  }

  protected clickOnSearch() {
    this.typeInSearch();
  }

  protected goToAdminPage() {
    this.router.navigate(['/main/card-create']);
  }

  protected goToMain() {
    this.router.navigate(['/main']);
  }

  protected goToLogin() {
    this.router.navigate(['/login']);
  }
}
