import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { saveToCart, initCart, removeItem } from './cart.actions';

export interface CartState{
    products: Product[];
}

export const initialState: CartState = {
    products:[]
};

const cartReducerFun = createReducer(
    initialState,
    on(saveToCart, (state, {product}) => ({...state, products:[...state.products, product]})),
    on(initCart, (state, {products}) => ({ ...state, products: products })),
    on(removeItem,(state, {id}) => ({ ...state, products:state.products.filter(item=>item.id !==id) })),
);

export function cartReducer(state: CartState | undefined, action: Action) {
    return cartReducerFun(state, action);
}  