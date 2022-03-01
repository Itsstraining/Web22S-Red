import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  constructor() { }
  @Input() item!:Item;
  @Output() itemChange = new EventEmitter();
  ngOnInit(): void {
    console.log(this.item)
  }

}
