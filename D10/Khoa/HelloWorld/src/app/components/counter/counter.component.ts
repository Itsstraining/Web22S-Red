import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter =0;
  @Output() onChangeItem = new EventEmitter();
  constructor() { }
  public increase(): any {
    this.counter++;
    this.onChangeItem.emit(this.counter)
  }
  public setZerovalue(n: any): any {
    return (n=0);
  }
  public decrease(): any {
    if (this.counter <=0){
      this.setZerovalue(this.counter);
    } else
    {
      this.counter--;
      this.onChangeItem.emit(this.counter)
    }
  }


  ngOnInit(): void {
  }

}
