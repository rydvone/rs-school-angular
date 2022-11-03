import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'src/app/youtube/models/custom-card.model';

export const ADD_CUSTOM_CARD = '[CustomCards] Add Custom Card';

export const addCustomCards = createAction(ADD_CUSTOM_CARD, props<{ newCard: CustomCard }>());
