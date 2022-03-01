import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ListItemCartComponent } from './components/list-item-cart/list-item-cart.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    ListItemCartComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  exports: [
    
  ]
})
export class ShoppingCartModule { }
