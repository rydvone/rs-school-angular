import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { YoutubeRoutingModule } from './youtube-routing.module';
import { DateColorService } from './services/date-color.service';
import { CardCreateComponent } from './components/card-create/card-create.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

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
    CardCreateComponent,
    AdminPageComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, YoutubeRoutingModule],
  exports: [SettingsComponent, CardsComponent, CardComponent, DetailedPageComponent, MainPageComponent],
  providers: [DateColorService],
})
export class YoutubeModule {}
