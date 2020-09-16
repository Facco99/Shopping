import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { selectProducts } from 'src/app/redux/cart';
import { addToCart } from 'src/app/redux/cart/cart.actions';

@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})
export class PersonalizzaComponent implements OnInit {
  products: Product[];
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
      //this.prod.id=this.products.length;
    });
  }
  prod:Product = {"tipo":"felpa","colore":"nero","prezzo":20};

  addToCart(text){
    //this.prod.id++;
    this.store.dispatch(addToCart({product: this.prod}))
  }

}
