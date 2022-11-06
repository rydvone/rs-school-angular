import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { RequestVideos } from 'src/app/youtube/models/search-request.model';
import { HttpCardsService } from 'src/app/youtube/services/http-cards.service';
import * as YoutubeCardsAction from '../actions/youtube-cards.action';

@Injectable()
export class YoutubeCardsEffects {
  constructor(private readonly actions$: Actions, private cardsHttp: HttpCardsService) {}

  loadYoutubeCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeCardsAction.loadYoutubeCards),
      switchMap(({ searchValue }: { searchValue: string }) => this.cardsHttp.getCard(searchValue)),
      map((requestVideos: RequestVideos) => {
        const cards = requestVideos.items;
        return YoutubeCardsAction.successLoadYoutubeCards({ cards });
      }),
    );
  });
}
