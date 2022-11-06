import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomCardsState } from '../state.models';

const selectFeature = createFeatureSelector<CustomCardsState>('customCards');

export const selectCustomCards = createSelector(selectFeature, (state: CustomCardsState) => state.customCards);
