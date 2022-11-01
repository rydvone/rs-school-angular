// import { state } from '@angular/animations';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as CustomCardAction from '../actions/custom-cards.action';
import { CustomCardsState } from '../state.models';

const initialCustomCards: CustomCardsState = {
  customCards: [],
};

export const customCardsReducer = createReducer(
  initialCustomCards,
  on(CustomCardAction.addCustomCards, (state, { newCard }) => ({
    ...state,
    customCards: [...state.customCards, newCard],
  })),
);

const selectFeature = createFeatureSelector<CustomCardsState>('customCards');

export const selectCustomCards = createSelector(selectFeature, (state: CustomCardsState) => state.customCards);
