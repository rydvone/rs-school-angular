import { createAction, props } from '@ngrx/store';

export const ADD_CUSTOMCARD = '[CustomCards] Add Custom Card';

export const AddCustomCards = createAction(ADD_CUSTOMCARD, props<{ customCardId: string }>());
