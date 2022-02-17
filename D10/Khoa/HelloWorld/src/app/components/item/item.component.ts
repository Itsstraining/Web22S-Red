import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import {  PaymentService} from '../../services/payment.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(
    public ServicesService:ServicesService,
    public dataService: PaymentService 
  ) { }
  @Input() item!:any
  ngOnInit(): void {
    // console.log(this.item)
  }

  getData(){
    let totalPayment = this.dataService.getTotal()
    alert ('TỔng tiền các xe mua là:'+ totalPayment)
  }
}

