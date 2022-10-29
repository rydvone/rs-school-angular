import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { HTTP_REQUEST } from '../constants/htttp.constant';
import { RequestSearch, RequestVideos } from '../models/search-request.model';

@Injectable({
  providedIn: 'root',
})
export class HttpCardsService {
  constructor(private http: HttpClient) {}

  private getCards(searchRequest: string) {
    return this.http.get<RequestSearch>(
      `${HTTP_REQUEST.search.request}?type=${HTTP_REQUEST.search.type}&part=${HTTP_REQUEST.search.part}&maxResults=${HTTP_REQUEST.search.maxResults}&q=${searchRequest}`,
    );
  }

  public getCard(searchRequest: string) {
    return this.getCards(searchRequest).pipe(
      switchMap(({ items }) => {
        const ids = items.map(({ id }) => id.videoId).join(',');
        return this.http.get<RequestVideos>(
          `${HTTP_REQUEST.videos.request}?id=${ids}&part=${HTTP_REQUEST.videos.part}`,
        );
      }),
    );
  }
}
