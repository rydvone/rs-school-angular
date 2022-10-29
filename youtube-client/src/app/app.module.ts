import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShortenerInterceptor } from './youtube/interceptors/shortener.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, CoreModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ShortenerInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
