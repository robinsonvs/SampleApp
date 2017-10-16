import { ItemErrorsComponent } from './../item-errors/item-errors.component';
import { ItemCadastroComponent } from './item-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ItemErrorsComponent
  ],
  declarations: [
    ItemCadastroComponent
  ]
})
export class ItemCadastroModule { }
