import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { switchMap, map, mergeMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { Router } from '@angular/router';
import { HttpcommunicationService } from 'src/app/core/httpcommunicationservice/httpcommunication.service';
import { login, loginUserFailure, loginUserSuccess, initUser, signUpUser, signUpUserSuccess } from './user.action';

@Injectable()
export class UserEffects{
    constructor(private actions$:Actions, private http: HttpcommunicationService, private router:Router){}

    formatUser(user:User):User{
        return {username:user.username,email:user.email} as User;
    }

    registerUser(username:string,password:string,email: string):Observable<User>{
        return this.http.retrievePostCall<User>("user",{username,password,email})
    }

    retreiveAllUsers():Observable<User[]>{
        return this.http.retrieveGetCall<User[]>("user")
    }

    checkUserAccount(mail:string,password:string,users){
        return users.find(actualUser=>actualUser.email === mail && actualUser.password === password);
    }

    login$: Observable<Action> = createEffect(()=>this.actions$.pipe(
        ofType(login),
        switchMap((action)=>this.retreiveAllUsers().pipe(
        switchMap(users=> of(this.checkUserAccount(action.user.email,action.user.password,users)).pipe(
            map(user=>{if(typeof user === 'undefined'){
                    return loginUserFailure({error:"Mail o password errate"});
                }else{
                    return loginUserSuccess({user});
                }
            } 
            )
        )
       )
       )
    )));

    loginUserSuccess$ : Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(loginUserSuccess),
        tap( action => {
            sessionStorage.setItem("utente", JSON.stringify({username: action.user.username, email: action.user.email }))
        }),
        tap(()=>this.router.navigateByUrl('/home')),
        map(action=> initUser({user: action.user})),
    ))


    signUpUser$=createEffect(()=>this.actions$.pipe(
        ofType(signUpUser),
        switchMap(action=>this.registerUser(action.username,action.password,action.email).pipe(
        tap(user=> console.log(user)),
        switchMap(user=>of(this.formatUser(user)).pipe(
        map( (formattedUser) => signUpUserSuccess({ user: formattedUser }))
        ))
        ))
    ));
        
    signUpUserSuccess$=createEffect(()=>this.actions$.pipe(
        ofType(signUpUserSuccess),
        map( (action) => initUser({ user:action.user })),
        tap((action)=>{
        sessionStorage.setItem("utente", JSON.stringify({username: action.user.username, email: action.user.email }))
        this.router.navigateByUrl('/home');
    })
    ))
    
}