import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatiRoutingModule } from './dati-routing.module';
import { DatiComponent } from './dati.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DatiComponent],
  imports: [
    CommonModule,
    DatiRoutingModule,
    SharedModule
  ]
})
export class DatiModule { }
