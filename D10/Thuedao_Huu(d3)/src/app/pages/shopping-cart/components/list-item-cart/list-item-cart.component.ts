import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-list-item-cart',
  templateUrl: './list-item-cart.component.html',
  styleUrls: ['./list-item-cart.component.scss']
})
export class ListItemCartComponent implements OnInit {

  constructor(
    public CartService:CartService
  ) { }

  public _cart: Array<any> = []
  public total = 0;
  ngOnInit(): void {
    this._cart = this.CartService.getCart()
    for(let i = 0; i<this.CartService.cart.length; i++){
      this.total += this.CartService.cart[i].price * this.CartService.cart[i].timelimit;
    }
  }

}
