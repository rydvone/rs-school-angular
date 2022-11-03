import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/youtube/models/card.model';

const LOAD_YOUTUBE_CARDS = '[YoutubeCards] Load all';

const SUCCESS_LOAD_YOUTUBE_CARDS = `[YoutubeCards] Successful Load all`;

const FAIL_LOAD_YOUTUBE_CARDS = '[YoutubeCards] Failure Load all';

export const loadYoutubeCards = createAction(LOAD_YOUTUBE_CARDS, props<{ searchValue: string }>());

export const successLoadYoutubeCards = createAction(SUCCESS_LOAD_YOUTUBE_CARDS, props<{ cards: Card[] }>());

export const failLoadYoutubeCards = createAction(FAIL_LOAD_YOUTUBE_CARDS, props<{ loadFail: string }>());
