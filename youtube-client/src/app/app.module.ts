import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { SettingsComponent } from './settings/settings.component';
import { CardsComponent } from './search-results/cards/cards.component';
import { CardComponent } from './search-results/card/card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AuthComponent, SettingsComponent, CardsComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
