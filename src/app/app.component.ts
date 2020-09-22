import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { retrieveAllProducts } from './redux/cart/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Shopping';

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(retrieveAllProducts());
  }
}
