import { Injectable, Input } from '@angular/core';
import { DataService } from './data.service';
import { PaymentService } from './payment.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Array<any>=[];
 
  constructor(
    public dataSV:DataService,
    public paySV:PaymentService) { }
  
    getCart(){
      return this.cart;
    }
  }

