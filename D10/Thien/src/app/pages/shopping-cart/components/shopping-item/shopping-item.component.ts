import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  constructor() { }
  public ListItem : Array<Item> = []
  ngOnInit(): void {
  }
  // public thanhToan = 0;
  // public tinhTongTien(e: string){
  //   this.thanhToan = this.pay.Total(this.ListItem)
  // }
}
