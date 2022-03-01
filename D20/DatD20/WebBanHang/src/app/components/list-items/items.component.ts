import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { DataService } from 'src/app/services/data.service';
import { TinhTienService } from 'src/app/services/service-thanhToan/tinh-tien.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  
  public items:Array<Account>=[];
    constructor(public database: DataService, public tinhtong:TinhTienService,public router:Router) {
      this.items=this.database.data;
    }

  ngOnInit(): void {
  }

  muaHang(){
    let tongTienMuaHang = this.tinhtong.thanhToan();
    alert(`Tổng tiền của bạn là: ${tongTienMuaHang} VNĐ`);
  }
  
  navigate(path:string) {
    this.router.navigateByUrl(path);
    alert(`Thanh toán giỏ hàng.`);
  }
}
