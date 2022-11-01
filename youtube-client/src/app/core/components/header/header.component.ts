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
    this.authService.getUsername();
    this.typeSearch$ = this.inputSearch.valueChanges.pipe(
      filter((text) => text.length > 3),
      debounceTime(1000),
      distinctUntilChanged(),
    );
    this.typeSearch$.subscribe((data) => {
      this.headerService.search(data);
      this.goToMain();
    });
  }

  protected showSettings() {
    this.headerService.toggleSettings();
    this.buttonSettingsColor = this.headerService.colorSettings;
  }

  protected goToMain() {
    this.router.navigate(['/main']);
  }
}
