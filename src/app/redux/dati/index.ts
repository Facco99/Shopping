import { createSelector } from '@ngrx/store';
import { DatiState } from './dati.reducers';

export const selectDatiState = (state)=>state.datiState;

export const selectDati = createSelector(
    selectDatiState,
    (datiState: DatiState) => datiState.dati
)