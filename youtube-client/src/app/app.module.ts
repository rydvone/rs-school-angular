import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { SortComponent } from './settings/sort/sort.component';
import { FilterComponent } from './settings/filter/filter.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    SettingsComponent,
    SortComponent,
    FilterComponent,
    CardsComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
