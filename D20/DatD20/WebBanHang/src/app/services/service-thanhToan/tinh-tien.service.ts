import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class TinhTienService {
  public tongtien:number = 0;
  constructor(public data:DataService) { }

  thanhToan() {
    this.tongtien=0;
    for(let i=0; i<this.data.data.length; i++){
      this.tongtien += this.data.data[i].quantity * this.data.data[i].price;
    }
    console.log(this.tongtien);
    return this.tongtien;
  }
}
