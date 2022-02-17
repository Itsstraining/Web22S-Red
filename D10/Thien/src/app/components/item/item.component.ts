import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item:any;
  @Output() changeEvent = new EventEmitter();
  constructor() { }


  ngOnInit(): void {
    console.log(this.item)
  }

  handle(e:number){
    this.item.quantity = e;
    this.changeEvent.emit(`Có dữ liệu mới thay đổi nè, tính tổng tiền lại đi!`)
  }
  
}
