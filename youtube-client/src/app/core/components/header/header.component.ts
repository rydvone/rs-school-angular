import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public valueSearch = '';

  public settingsState = this.headerService.stateSettings;

  public buttonSettingsColor: string = this.headerService.colorSettings;

  protected inputSearch = new FormControl();

  protected typeSearch$!: Observable<string>;

  constructor(protected headerService: HeaderService, private router: Router, protected authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isUsername();
  }

  typeInSearch() {
    this.typeSearch$ = this.inputSearch.valueChanges.pipe(
      filter((text) => text.length > 3),
      debounceTime(1000),
      distinctUntilChanged(),
    );
    this.typeSearch$.subscribe((data) => {
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
