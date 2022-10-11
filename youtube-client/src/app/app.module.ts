import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { SettingsComponent } from './settings/settings.component';
import { CardsComponent } from './search-results/cards/cards.component';
import { CardComponent } from './search-results/card/card.component';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ColorBorderCardDirective } from './directives/color-border-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SettingsComponent,
    CardsComponent,
    CardComponent,
    FilterByWordPipe,
    SortPipe,
    ColorBorderCardDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
