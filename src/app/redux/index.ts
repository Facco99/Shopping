import { ActionReducerMap, createReducerFactory } from '@ngrx/store';
import { UserState, userReducer } from './user/user.reducer';

export interface AppState{
    userState: UserState;
}

export const reducers: ActionReducerMap<AppState> ={
    userState: userReducer,
};