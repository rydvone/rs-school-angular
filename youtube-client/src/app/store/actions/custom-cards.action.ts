import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'src/app/youtube/models/custom-card.model';

export const ADD_CUSTOMCARD = '[CustomCards] Add Custom Card';

export const addCustomCards = createAction(ADD_CUSTOMCARD, props<{ newCard: CustomCard }>());
