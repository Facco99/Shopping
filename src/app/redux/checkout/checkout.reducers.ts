import { Action, createReducer, on } from '@ngrx/store';
import { Checkout } from 'src/app/core/models/checkout';
import { initCheckout } from './checkout.actions';

export interface CheckoutState{
    checkout: Checkout;
}

export const initialState: CheckoutState = {
    checkout:null
};

const checkoutReducerFun = createReducer(
    initialState,
    on(initCheckout, (state, {checkout}) => ({ ...state.checkout, checkout: checkout})),
);

export function checkoutReducer(state: CheckoutState | undefined, action: Action) {
    return checkoutReducerFun(state, action);
} 