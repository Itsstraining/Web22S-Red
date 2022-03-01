import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ContainerComponent } from './components/container/container.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PurchasedProductComponent } from './components/purchased-product/purchased-product.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartItemComponent,
    ContainerComponent,
    PaymentComponent,
    PurchasedProductComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
  ]
})
export class ShoppingCartModule { }
