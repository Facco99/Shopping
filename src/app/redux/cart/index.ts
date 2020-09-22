import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { selectRouteParams } from '../router';
import { CartState } from './cart.reducers';

export const selectCartState = (state)=>state.cartState;

export const selectProducts = createSelector(
    selectCartState,
    (cartState: CartState) => cartState.products
);

export const selectVestitoByTipo = createSelector(
    selectCartState,
    selectRouteParams,
    (state: CartState, params: Params)=> {
        return state.products.find(product => product.tipo === (params['tipo']));
    }
);

export const getCurrentNavigatedVestito = createSelector(
    selectCartState,
    selectRouteParams,
    (state: CartState, params: Params) => state.products.find(item => item.id === Number(params['id']))
);