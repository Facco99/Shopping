import { Action, createReducer, on } from '@ngrx/store';
import { Dati } from 'src/app/core/models/dati';
import { initDati, saveDati } from './dati.actions';

export interface DatiState{
    dati: Dati;
}

export const initialState: DatiState = {
    dati:null
};

const datiReducerFun = createReducer(
    initialState,
    on(initDati, (state, {dati}) => ({ ...state.dati, dati: dati }))
);

export function datiReducer(state: DatiState | undefined, action: Action) {
    return datiReducerFun(state, action);
} 