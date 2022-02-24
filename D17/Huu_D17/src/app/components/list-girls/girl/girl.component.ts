import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CartService } from '../../../services/cart.service';
import { Girl } from '../../../models/girl.model'
@Component({
  selector: 'app-girl',
  templateUrl: './girl.component.html',
  styleUrls: ['./girl.component.scss']
})
export class GirlComponent implements OnInit {
  @Input() girl!: Girl
  @Output() onChangeGirl = new EventEmitter;
  @Output() changGirl = new EventEmitter;
  constructor(public girlData:DataService, public CartService:CartService) { }
  

  ngOnInit(): void {
    // console.log(this.girlData.data)
  }

  increase(){
    if (this.girl.timelimit<10){
    this.girl.timelimit++
    this.onChangeGirl.emit(this.girl.timelimit)
   
    }else {
      alert('Thuê ít thôi')
    }
  }

  decrease(){
    if(this.girl.timelimit <=0){
      return;
    } else {
    this.girl.timelimit--
    this.onChangeGirl.emit(this.girl.timelimit)
   
    }
  }

  rentTotal(){
    // let pay=this.girl.timelimit*this.girl.price;
    // alert('Thuê em ' +this.girl.name+ ' thành công này với giá '+pay+'VND')
    // this.onChangeGirl.emit(pay)
    if(this.CartService.cart.length === 0){
      this.CartService.cart.push(this.girl)
    }else{
      for(let i = 0; i<this.CartService.cart.length; i++){
        if(this.CartService.cart[i].id == this.girl.id){
          this.CartService.cart[i].timelimit = this.girl.timelimit;
        }else{
          this.CartService.cart.push(this.girl)
        }
      }
    }
  }
  
}

