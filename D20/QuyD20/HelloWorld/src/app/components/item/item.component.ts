import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

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
    public cartSV:CartService,
    public dataSV:DataService
  ) { }

  ngOnInit(): void {
    // console.log(this.item)
  }
  public increase(){
    if (this.item.quantity >= 10){
      return;
    }else {
      this.item.quantity++;
      this.itemChange.emit(this.item.quantity);
      this.updateOnDB();
    }
    
  }
  public decrease(){
    if (this.item.quantity <= 0){
      this.dataSV.delete(this.item);
      return;
    }else{  
      this.item.quantity--;
      this.itemChange.emit(this.item.quantity);
      this.updateOnDB();
    }
    
  }
  public updateOnDB(){
    this.dataSV.update(this.item);
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
