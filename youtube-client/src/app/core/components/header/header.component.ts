import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SettingsService } from 'src/app/youtube/services/settings.service';
import { selectIsLoadYoutubeCards } from 'src/app/store/selectors/youtube-cards.selector';
import { HeaderService } from '../../services/header.service';
import * as YoutubeCardsAction from '../../../store/actions/youtube-cards.action';

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

  protected displaySettings$: Observable<boolean>;

  constructor(
    protected headerService: HeaderService,
    protected settingsService: SettingsService,
    private router: Router,
    protected authService: AuthService,
    private store: Store,
  ) {
    this.displaySettings$ = this.store.select(selectIsLoadYoutubeCards);
  }

  ngOnInit(): void {
    this.authService.getUsername();
    this.typeSearch$ = this.inputSearch.valueChanges.pipe(
      filter((text) => text.length > 3),
      debounceTime(1000),
      distinctUntilChanged(),
    );
    this.typeSearch$.subscribe((searchValue) => {
      this.store.dispatch(YoutubeCardsAction.loadYoutubeCards({ searchValue }));
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
