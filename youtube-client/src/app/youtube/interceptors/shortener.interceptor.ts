import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_COMMON } from '../constants/htttp.constant';

@Injectable()
export class ShortenerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const shortenerRequest = request.clone({
      url: `${HTTP_COMMON.url}${request.url}`,
      setParams: {
        key: HTTP_COMMON.apiKey,
      },
    });
    return next.handle(shortenerRequest);
  }
}
