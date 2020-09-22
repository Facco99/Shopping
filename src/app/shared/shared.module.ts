import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ColoreComponent } from './personalizza/colore/colore.component';
import { TagliaComponent } from './personalizza/taglia/taglia.component';



@NgModule({
  declarations: [MenuComponent, ColoreComponent, TagliaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MenuComponent,
    ReactiveFormsModule,
    TagliaComponent,
    ColoreComponent
  ]
})
export class SharedModule { }
