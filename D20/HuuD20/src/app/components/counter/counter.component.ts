import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { GirlComponent } from '../list-girls/girl/girl.component';
import { ListGirlsComponent } from '../list-girls/list-girls.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter = 0;
  @Output() itemChange = new EventEmitter()
  constructor() { }
  public increase(): any{
    this.counter++;
    this.itemChange.emit(this.counter)
  }
  public setZerovalue(n: any): any {
    return (n=0);
  }
  public decrease(): any{
    if (this.counter <=0){
      this.setZerovalue(this.counter);
    } else
    {
      this.counter--;
    }
  }

    // public total(){
    //   return this.counter* 
  // }
  
  ngOnInit(): void {
  }

}
