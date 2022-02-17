import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component'

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingItemComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  exports:[
    // ShoppingItemComponent
  ]
})
export class ShoppingCartModule { }
