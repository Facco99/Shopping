import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  prodotti: string[];
  personalizzaForm: FormGroup;

  constructor(private store:Store, private fb: FormBuilder) { 
    this.personalizzaForm = fb.group({
      colore: [''],
      taglia: [''],
      testo: [''],
    });
  }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
    });


  }

  addToCart(){
    let product:Product = this.personalizzaForm.value
    product.prezzo=this.prezzo(product);
    this.store.dispatch(addToCart({ product }))
  }

  reset(){
    this.personalizzaForm.reset();
  }

  prezzo(prod:Product):number {
    let price:number=30;
    return price;
  }

}
