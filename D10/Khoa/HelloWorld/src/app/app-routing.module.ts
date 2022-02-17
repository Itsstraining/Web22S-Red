import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'cart', loadChildren: () => import('./Pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
