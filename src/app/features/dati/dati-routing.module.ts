import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatiComponent } from './dati.component';

const routes: Routes = [{ path: '', component: DatiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatiRoutingModule { }
