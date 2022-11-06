import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeCardsState } from '../state.models';

const selectFeature = createFeatureSelector<YoutubeCardsState>('youtubeCards');

export const selectAllYoutubeCards = createSelector(selectFeature, (state: YoutubeCardsState) => state.youtubeCards);

export const selectIsLoadYoutubeCards = createSelector(selectFeature, (state: YoutubeCardsState) => state.isLoad);

export const selectYoutubeCardById = (idCard: string) =>
  createSelector(selectFeature, (state: YoutubeCardsState) => state.youtubeCards.find(({ id }) => id === idCard));
