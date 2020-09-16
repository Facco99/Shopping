import { Component, OnInit } from '@angular/core';
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

  currentRoute:string=null;
  products: Product[];
  
  constructor(private router:Router, private store:Store) { }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.currentRoute=this.router.url.toString();
      });

      this.store.pipe(select(selectProducts)).subscribe(products=>{
        this.products=products;
      });
    }

    rimuovi(id:number){
      this.store.dispatch(removeToCart({id}));
    }
}
