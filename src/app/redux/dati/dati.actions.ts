import { createAction, props } from '@ngrx/store';
import { Dati } from 'src/app/core/models/dati';

export const initDati = createAction('[Dati] init dati', props<{dati:Dati}>());
export const saveDati = createAction('[Dati] save dati', props<{dati:Dati}>());