import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { HttpcommunicationService } from 'src/app/core/httpcommunicationservice/httpcommunication.service';
import { Checkout } from 'src/app/core/models/checkout';
import { Dati } from 'src/app/core/models/dati';
import { Product } from 'src/app/core/models/product';
import { User } from 'src/app/core/models/user';
import { selectProducts } from 'src/app/redux/cart';
import { selectCheckout } from 'src/app/redux/checkout';
import { saveCheckout } from 'src/app/redux/checkout/checkout.actions';
import { selectDati } from 'src/app/redux/dati';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  done: boolean;
  checkout: Checkout;
  user: User;
  checkoutForm:FormGroup;
  dati: Dati;
  products: Product[];
  prezzo:number;
  spedizione:number;
  
  constructor(private store:Store, private fb:FormBuilder, private http: HttpcommunicationService) { 
    this.user=JSON.parse(sessionStorage.getItem("utente"));
    this.done=false;
   }

  ngOnInit(): void {
    this.store.pipe(select(selectDati)).subscribe(dati=>{
      this.dati=dati;
      if(this.dati==null){
        this.dati=this.user.dati;
      }
    });
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
      this.calcolaPrezzo();
    });
    this.store.pipe(select(selectCheckout)).subscribe(checkout=>{
      this.checkout=checkout;
      if(this.checkout==null){
        this.checkout=this.user.checkout;
    }
    this.checkoutForm=this.fb.group({
      method: [this.checkout==null?'':this.checkout.method, Validators.required],
      type: [this.checkout==null?'':this.checkout.type,Validators.required],
      number: [this.checkout==null?'':this.checkout.number, Validators.required],
      cvv: [this.checkout==null?'':this.checkout.cvv, Validators.compose([Validators.required,Validators.minLength(3)])],
    })
    });
  }

  calcolaPrezzo(){
    this.prezzo=0;
    this.products.forEach(item => {
      this.prezzo+=item.prezzo;
    });
    if(this.prezzo<100){
      this.spedizione=5;
    }else{
      this.spedizione=0;
    }
    this.prezzo+=this.spedizione;
  }

  pay(){
    this.checkout=this.checkoutForm.value;
    this.store.dispatch(saveCheckout({checkout:this.checkout}));
    this.done=true;
  }

}
