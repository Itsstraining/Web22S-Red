import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public cartSV:CartService) { }
  public array:Array<Item> = []
  ngOnInit(): void {
    this.array = this.cartSV.cart
    console.log(this.array)
  }

}
