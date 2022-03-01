import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public shopCart(){
    let cart=[];
    cart=this.cartSV.getCart();
  }
  constructor(public dataSV:DataService,
    public paySV: PaymentService,
    public cartSV:CartService) { }


  ngOnInit(): void {
  }

}
