import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() changeValue = new EventEmitter();
  @Input() item!: Account;
  constructor(public dataSv: DataService) { }

  ngOnInit(): void {
  }


    public increment(){
      if (this.item.quantity >= 10){
        return;
      }else {
        this.item.quantity++;
        this.changeValue.emit(this.item.quantity);
        this.updateOnDB();
      }
      
    }
    public decrement(){
      if (this.item.quantity <= 0){
        this.dataSv.delete(this.item);
        return;
      }else{  
        this.item.quantity--;
        this.changeValue.emit(this.item.quantity);
        this.updateOnDB();
      }
      
    }
    public updateOnDB(){
      this.dataSv.update(this.item);
    }
    
}
