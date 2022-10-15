import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SettingsComponent } from './core/components/settings/settings.component';
// import { FilterByWordPipe } from './youtube/pipes/filter-by-word.pipe';
// import { SortPipe } from './pipes/sort.pipe';
// import { ColorBorderCardDirective } from './youtube/directives/color-border-card.directive';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CoreModule, YoutubeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
