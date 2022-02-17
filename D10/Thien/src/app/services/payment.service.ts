import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public data:DataService) { }

Total(arr:Array<Item>){
  let total = 0;
  for(let i = 0;i<this.data.ListItem.length;i++){
    total += parseInt(arr[i].price) * arr[i].quantity;
  }
   return total;
}

}
