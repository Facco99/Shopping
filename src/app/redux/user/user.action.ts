import {createAction, props} from '@ngrx/store';
import { User } from 'src/app/core/models/user';
export const initUser = createAction('[User] init', props<{user: User}>());

export const login = createAction('[Login] signin', props<{user:User}>());
export const loginUserSuccess = createAction('[Login] Login Success', props<{user: User}>());
export const loginUserFailure = createAction('[Login] Login Failure', props<{error: string}>());

export const signUpUser = createAction('[Register] signUp', props<{username: string, password: string, email: string}>());
export const signUpUserSuccess = createAction('[Register] signUp Success', props<{user: User}>());