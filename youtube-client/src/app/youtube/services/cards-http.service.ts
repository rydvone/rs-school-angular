import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from 'src/app/auth/models/card.model';
import { HTTP_COMMON, HTTP_REQUEST } from '../constants/cards-htttp.constant';

@Injectable({
  providedIn: 'root',
})
export class CardsHttpService {
  constructor(private http: HttpClient) {}

  public getCards(searchRequest: string) {
    return this.http.get<Card[]>(
      `${HTTP_COMMON.url}${HTTP_REQUEST.search.request}?key=${HTTP_COMMON.apiKey}&type=${HTTP_REQUEST.search.type}&part=${HTTP_REQUEST.search.part}&maxResults=${HTTP_REQUEST.search.maxResults}&q=${searchRequest}`,
    );
  }

  public getCard(ids: string) {
    return this.http.get<Card>(
      `${HTTP_COMMON.url}${HTTP_REQUEST.videos.request}?key=${HTTP_COMMON.apiKey}&id=${ids}&part=${HTTP_REQUEST.videos.part}`,
    );
  }
}
