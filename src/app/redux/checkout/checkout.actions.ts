import { createAction, props } from '@ngrx/store';
import { Checkout } from 'src/app/core/models/checkout';

export const initCheckout = createAction('[Checkout] init', props<{checkout:Checkout}>());
export const saveCheckout = createAction('[Checkout] save', props<{checkout:Checkout}>());