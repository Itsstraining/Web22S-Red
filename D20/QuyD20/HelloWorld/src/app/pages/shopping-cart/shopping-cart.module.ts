import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShareModule } from 'src/app/module/shared/shared.module';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingItemComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,  
    ShareModule
  ]
})
export class ShoppingCartModule { }
