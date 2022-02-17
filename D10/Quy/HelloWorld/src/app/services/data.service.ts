import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public ListItem: Array<Item> = [
  {
    photourl:"../../../assets/images/Awayout.jpg",
    name: "A way out",
    price: "300000",
    quantity: 0
  },
  {
    photourl:"../../../assets/images/Battlefield4.jpg",
    name: "Battlefield 4",
    price: "500000",
    quantity: 0
  },
  {
    photourl:"../../../assets/images/Blasphemous.jpg",
    name: "Blasphemos",
    price: "200000",
    quantity: 0
  },
  {
    photourl:"../../../assets/images/DevilMayCry5.jpg",
    name: "Devil May Cry 5",
    price: "1000000",
    quantity: 0
  },
  {
    photourl:"../../../assets/images/FiFA21.jpg",
    name: "FIFA 21",
    price: "700000",
    quantity: 0
  },
  {
    photourl:"../../../assets/images/Forza.jpg",
    name: "Forza Horizon 5",
    price: "900000",
    quantity: 0
  },
  {
    photourl:"../../../assets/images/genshin.jpg",
    name: "Genshin Impact",
    price: "0",
    quantity: 0
  },
  {
    photourl:"../../../assets/images/GTA5online.jpg",
    name: "GTA Grand Thieft Auto 5 online",
    price: "1500000",
    quantity: 0
  },
  {
    photourl:"../../../assets/images/Pubg.jpg",
    name: "PlayerUnknown's Battleground",
    price: "1000000",
    quantity: 0
  },
  {
    photourl:"../../../assets/images/Subnautica.jpg",
    name: "Subnautica",
    price: "300000",
    quantity: 0
  }
  
]
}
