import { ItemErrorsComponent } from './item-errors/item-errors.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemServiceService } from './item/item-service.service';

import { AppComponent } from './app.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ItemCadastroComponent,
    ItemErrorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ItemServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
