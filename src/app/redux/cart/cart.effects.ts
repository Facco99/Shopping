import {Injectable} from "@angular/core";
import { addToCart, saveToCart, initCart, retrieveAllProducts, removeToCart, removeItem } from './cart.actions';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from 'rxjs';
import { switchMap, map, tap} from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { HttpcommunicationService } from 'src/app/core/httpcommunicationservice/httpcommunication.service';

@Injectable()
export class CartEffects{
    constructor(private actions$:Actions, private http: HttpcommunicationService){}

    addToCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addToCart),
        switchMap((action) => this.http.retrievePostCall("products",action.product)
        .pipe(
            map((product:Product) => saveToCart({product: product}))
        ))
    ));

    retrieveAllProducts$: Observable<Action> = createEffect(()=>this.actions$.pipe(
        ofType(retrieveAllProducts),
        switchMap(action => this.http.retrieveGetCall<Product[]>("products")
        .pipe(
            tap((products) =>{
                let vestiti = JSON.stringify(products);
                sessionStorage.setItem("products",vestiti);
            }),
            map(products => initCart({ products: products }))
        ))
    ));

    removeProducts$: Observable<Action> = createEffect(()=>this.actions$.pipe(
         ofType(removeToCart),
         switchMap(action=> this.http.retrieveDeleteCall<Product[]>("products/"+action.id).pipe(
             map(products => removeItem({ id: action.id }))
         ))
     ));

     
}