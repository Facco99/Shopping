import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CheckoutState } from './checkout.reducers';

export const selectCheckoutState = (state: AppState)=>state.checkoutState;

export const selectCheckout = createSelector(
    selectCheckoutState,
    (checkoutState: CheckoutState) => checkoutState.checkout
)