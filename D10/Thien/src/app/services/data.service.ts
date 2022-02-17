import { Injectable } from '@angular/core';
import {Item} from '../models/item.model'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public ListItem:Array<Item> =[
    {name:"Abeldo",
    price:"100000",
    photoUrl:"../../../assets/images/abeldo.jfif",
    quantity:0
  },

    {name:"Ace",
    price:"100000",
    photoUrl:"../../../assets/images/ace.jfif",
    quantity:0},
    {name:"Gingameth",
    price:"100000",
    photoUrl:"../../../assets/images/ginga.jfif",
    quantity:0},
    {name:"Kaido",
    price:"100000",
    photoUrl:"../../../assets/images/kaido.jfif",
    quantity:0},
    {name:"Luffy",
    price:"100000",
    photoUrl:"../../../assets/images/luf.jfif",
    quantity:0},
    {name:"Robin",
    price:"100000",
    photoUrl:"../../../assets/images/robin.jfif",
    quantity:0},
    {name:"Robin",
    price:"100000",
    photoUrl:"../../../assets/images/robin2.jfif",
    quantity:0},
    {name:"Shoto",
    price:"100000",
    photoUrl:"../../../assets/images/shoto.jfif",
    quantity:0},

  ]
}
