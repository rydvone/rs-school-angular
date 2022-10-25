import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { HTTP_COMMON, HTTP_REQUEST } from '../constants/htttp.constant';
import { RequestSearch, RequestVideos } from '../models/search-request.model';

@Injectable({
  providedIn: 'root',
})
export class CardsHttpService {
  constructor(private http: HttpClient) {}

  public getCards(searchRequest: string) {
    return this.http.get<RequestSearch>(
      `${HTTP_COMMON.url}${HTTP_REQUEST.search.request}?key=${HTTP_COMMON.apiKey}&type=${HTTP_REQUEST.search.type}&part=${HTTP_REQUEST.search.part}&maxResults=${HTTP_REQUEST.search.maxResults}&q=${searchRequest}`,
    );
  }

  public getCard(searchRequest: string) {
    return this.getCards(searchRequest).pipe(
      switchMap(({ items }) => {
        const ids = items.map(({ id }) => id.videoId).join(',');
        return this.http.get<RequestVideos>(
          `${HTTP_COMMON.url}${HTTP_REQUEST.videos.request}?key=${HTTP_COMMON.apiKey}&id=${ids}&part=${HTTP_REQUEST.videos.part}`,
        );
      }),
    );
  }
}
