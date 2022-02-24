import { Injectable } from '@angular/core';
import { DataService } from './data.service'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private DataService:DataService) { }

  // getTotal(){
  //   let total = 0;
  //   for(let i = 0; i<this.DataService.data.length; i++){
  //     total += this.DataService.data[i].price * this.DataService.data[i].timelimit;
  //   }
  //   return total;
  // }

  

}
