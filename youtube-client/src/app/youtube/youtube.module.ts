import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailedPageComponent } from './components/detailed-page/detailed-page.component';
import { CardsComponent } from './components/search-results/cards/cards.component';
import { CardComponent } from './components/search-results/card/card.component';
import { ColorBorderCardDirective } from './directives/color-border-card.directive';
import { SortPipe } from './pipes/sort.pipe';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';

@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    DetailedPageComponent,
    ColorBorderCardDirective,
    SortPipe,
    FilterByWordPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [CardsComponent, CardComponent, DetailedPageComponent],
})
export class YoutubeModule {}
