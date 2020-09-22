import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './redux/user/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpcommunicationService } from './core/httpcommunicationservice/httpcommunication.service';
import { CartEffects } from './redux/cart/cart.effects';
import { DatiEffects } from './redux/dati/dati.effects';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects, CartEffects, DatiEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule,
    SharedModule
  ],
  providers: [HttpcommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
