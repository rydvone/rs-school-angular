import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShortenerInterceptor } from './youtube/interceptors/shortener.interceptor';
import { customCardsReducer } from './store/reducers/custom-cards.reducer';
import { youtubeCardsReducer } from './store/reducers/youtube-cards.reducer';
import { YoutubeCardsEffects } from './store/effects/youtube-cards.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    StoreModule.forRoot(
      {
        customCards: customCardsReducer,
        youtubeCards: youtubeCardsReducer,
      },
      {},
    ),
    EffectsModule.forRoot([YoutubeCardsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ShortenerInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
