import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public Data:DataService) {}

  public total = 0;
  tinhTongTien(arr:Array<Item>){
    this.total = 0;
    for(let i = 0; i<arr.length; i++){
      this.total += parseInt(arr[i].price) * arr[i].quantity
    }
    return this.total;
  }

}
