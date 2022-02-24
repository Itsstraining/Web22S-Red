import { Injectable } from '@angular/core';
import {collectionData,docData, collection, Firestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore:Firestore) { }

  public data=[];
  ref=collection(this.firestore,'girls')
  
  getData()
  {
    return collectionData(this.ref)
  }

}
