import { ActionReducerMap} from '@ngrx/store';
import { cartReducer, CartState } from './cart/cart.reducers';
import { UserState, userReducer } from './user/user.reducer';

export interface AppState{
    userState: UserState;
    cartState: CartState;
}

export const reducers: ActionReducerMap<AppState> ={
    userState: userReducer,
    cartState: cartReducer
};