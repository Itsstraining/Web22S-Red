import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(public DataSV:DataService) { }
  public arrayCart:Array<Item> = [];
  public total = 0;
  public cart = [];
  getCart(): number{
    for(let i=0; i<this.arrayCart.length; i++){
      this.total += parseInt(this.arrayCart[i].price) * this.arrayCart[i].quantity
    }
    return this.total;
  }

}
