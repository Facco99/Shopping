import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { selectProducts } from 'src/app/redux/cart';
import { removeToCart } from 'src/app/redux/cart/cart.actions';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  mostra:boolean;
  tot:number;
  products: Product[];
  constructor(private store:Store) { 
  }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
    });

  }

  returnImage(tipo:string):string{
    return "../../../assets/img/"+tipo+".jpeg";
  }

  remove(id:number){
    this.store.dispatch(removeToCart({id}));
  }

}
