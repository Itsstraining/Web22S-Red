import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { TinhTienService } from 'src/app/services/service-thanhToan/tinh-tien.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  @Input() item!: Account;
  public tong:number=0;
  constructor(public tinhtong:TinhTienService) {}
  ngOnInit(): void {
  }
  test(a: any) {
    this.item.quantity=a;
  }
}
