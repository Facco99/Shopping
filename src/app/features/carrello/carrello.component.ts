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
  spedizione: number;
  constructor(private store:Store) { 
  }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
      this.prezzo();
    });

  }

  remove(id:number){
    this.store.dispatch(removeToCart({id}));
  }

  prezzo(){
    this.tot=0;
    this.products.forEach(item => {
      this.tot+=item.prezzo;
    });
    if(this.tot<100){
      this.spedizione=5;
      this.tot+=this.spedizione;
    }else{
      this.spedizione=0;
    }
  }

}
