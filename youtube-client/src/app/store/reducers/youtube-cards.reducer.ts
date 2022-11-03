import { createReducer, on } from '@ngrx/store';
import * as YoutubeCardAction from '../actions/youtube-cards.action';
import { YoutubeCardsState } from '../state.models';

const initialYoutubeCards: YoutubeCardsState = {
  youtubeCards: [],
  isLoad: false,
};

export const youtubeCardsReducer = createReducer(
  initialYoutubeCards,
  on(YoutubeCardAction.successLoadYoutubeCards, (state, { cards }) => {
    console.log('success cards', state, cards);
    return {
      ...state,
      youtubeCards: [...cards],
      isLoad: true,
    };
  }),
  on(YoutubeCardAction.loadYoutubeCards, (state) => {
    console.log('loadYoutubeCards Reducer', state);
    return { ...state, isLoad: false };
  }),
  on(YoutubeCardAction.failLoadYoutubeCards, (state) => {
    console.log('fail Reducer', state);
    return { ...state, isLoad: false };
  }),
);
