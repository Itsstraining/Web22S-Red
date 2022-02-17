import { Injectable } from '@angular/core';
import {ServicesService} from './services.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public dataService:ServicesService) {}

  getTotal() {
    let total = 0;
    for(let i = 0; i<this.dataService.array.length;i++){
      total += this.dataService.array[i].Quantity * this.dataService.array[i].newPrice;
    }
    return total;
  } 
}

  

