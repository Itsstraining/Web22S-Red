import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModule } from '../../shared/share.module'
import { CounterComponent } from '../../components/counter/counter.component'
import { ListGirlsComponent } from '../../components/list-girls/list-girls.component'
import { GirlComponent } from '../../components/list-girls/girl/girl.component'
import { FormsModule } from '@angular/forms';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
@NgModule({
  declarations: [
    HomeComponent,
    // CounterComponent,
    // ListGirlsComponent,
    // GirlComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
    FormsModule,
    ShoppingCartModule
  ]
})
export class HomeModule { }
