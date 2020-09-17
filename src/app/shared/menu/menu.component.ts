import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { selectProducts } from 'src/app/redux/cart';
import { removeToCart } from 'src/app/redux/cart/cart.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  title:string;

  @Input()
  home:boolean;

  @Input()
  cart:boolean;
  products: Product[];
  
  constructor(private router:Router, private store:Store) { }

  ngOnInit(): void {

      this.store.pipe(select(selectProducts)).subscribe(products=>{
        this.products=products;
      });
    }

    rimuovi(id:number){
      this.store.dispatch(removeToCart({id}));
    }
}
