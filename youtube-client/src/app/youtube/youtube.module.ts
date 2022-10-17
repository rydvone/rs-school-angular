import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { CardsComponent } from './components/search-results/cards/cards.component';
import { CardComponent } from './components/search-results/card/card.component';
import { ColorBorderCardDirective } from './directives/color-border-card.directive';
import { SortPipe } from './pipes/sort.pipe';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ColorShadowCardDirective } from './directives/color-shadow-card.directive';
import { ColorBackgroundDirective } from './directives/color-background.directive';

@NgModule({
  declarations: [
    SettingsComponent,
    CardsComponent,
    CardComponent,
    DetailedPageComponent,
    ColorBorderCardDirective,
    SortPipe,
    FilterByWordPipe,
    MainPageComponent,
    ColorShadowCardDirective,
    ColorBackgroundDirective,
  ],
  imports: [CommonModule, FormsModule],
  exports: [SettingsComponent, CardsComponent, CardComponent, DetailedPageComponent, MainPageComponent],
})
export class YoutubeModule {}
