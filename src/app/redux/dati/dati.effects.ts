import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { initDati, saveDati } from './dati.actions';

@Injectable()
export class DatiEffects{
    constructor(private actions$:Actions){}

    saveDati$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(saveDati),
        map((action)=>initDati({dati:action.dati})
        )
    ))
}
