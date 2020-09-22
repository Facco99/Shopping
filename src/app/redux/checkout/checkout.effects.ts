import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpcommunicationService } from 'src/app/core/httpcommunicationservice/httpcommunication.service';
import { initCheckout, saveCheckout } from './checkout.actions';

@Injectable()
export class PaymentEffects{
    constructor(private actions$:Actions, private http: HttpcommunicationService){}

    savePayment$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(saveCheckout),
        map((action)=>initCheckout({checkout:action.checkout})
        )
    ))
}
