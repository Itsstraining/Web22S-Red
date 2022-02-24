import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public counter = 0;
  @Input() item!:Item;
  @Output() itemChange = new EventEmitter();
  constructor(
    private router:Router,
    public cartSV:CartService
  ) { }

  ngOnInit(): void {
    // console.log(this.item)
  }
  public increase(){
    if (this.item.quantity >= 10){
      return;
    }else {
      this.item.quantity++;
    }
    this.itemChange.emit(this.item.quantity)
  }
  public decrease(){
    if (this.item.quantity <= 0){
      return;
    }else{  
      this.item.quantity--;
    }
    this.itemChange.emit(this.item.quantity)
  }
  public get(){
    this.cartSV.arrayCart.push(this.item);
    console.log(this.cartSV.arrayCart);
    
    return;
  }

  navigate(){
    this.cartSV.arrayCart.push(this.item)
    this.router.navigate(['/cart'])
  }

}
