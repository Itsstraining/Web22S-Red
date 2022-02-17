import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { PaymentService } from 'src/app/services/payment.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {

  constructor(
    public pay:PaymentService,
    public Router:Router
    ) { }
 
  @Input() couter = 0;
  @Output() onChange = new EventEmitter();

   public increment() {
     if(this.couter >= 50){
     return;
   }else{
     this.couter++;
     this.SL--;
     this.onChange.emit(this.couter);
   }
  //  this.itemChange.emit(this.item.quantity)
   }
 
   public decrement(){
     if(this.couter <= 0){
       return;
     }else{
       this.couter--;
       this.SL++;
       this.onChange.emit(this.couter);
     }
    //  this.itemChange.emit(this.item.quantity)
    }
  public SL=50;
  ngOnInit(): void {
  }
  
  public navigate(){
    this.Router.navigate(['/cart'])
  }
 
}
