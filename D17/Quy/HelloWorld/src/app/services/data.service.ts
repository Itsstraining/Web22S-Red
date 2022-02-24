import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { collection, collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private firestore:Firestore
  ) { }

  public ref = collection(this.firestore, 'item');
  
  getDatafromFB(){
    return collectionData(this.ref);
  }

}
