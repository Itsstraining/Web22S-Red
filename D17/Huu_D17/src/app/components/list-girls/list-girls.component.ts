import { Component, Input, OnInit, Output } from '@angular/core';
import { Girl } from 'src/app/models/girl.model';
import { DataService } from 'src/app/services/data.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-list-girls',
  templateUrl: './list-girls.component.html',
  styleUrls: ['./list-girls.component.scss']
})
export class ListGirlsComponent implements OnInit {


  constructor(
    public dataSV:DataService,
    public paySV: PaymentService
    ) { }

  public listGirl: Array<Girl> = []
    public _girl:any;

  ngOnInit(): void {
    // console.log(this.dataSV.data);
    // this.listGirl = this.dataSV.data

    this.dataSV.getData().subscribe((res:any)=>{
    this._girl=res
    console.log(this._girl)
    })
    }
  getTotal(quantity: number, e: number){
    // quantity = e
    // this.tong = this.paySV.getTotal()
    // console.log(this.tong);
  }
  
// public tong=0;
   
   
   
}
