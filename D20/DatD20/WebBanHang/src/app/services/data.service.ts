import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { Account } from '../models/account.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: Account[]=[];
  

  public collectItems = collection(this.firestore, 'Accounts');
  constructor(public firestore: Firestore, public _fireStore: Firestore) { }
   
  
  
public createListenerData(data: Account[]){
    let result: Account[] = [];
    return collectionData(this.collectItems, {
      idField: 'id',
    });
  }
  public updateAllData(){
    for(let item of this.data){
      let tempID = (item as any)['id'];
      updateDoc(doc(this.firestore, 'item', tempID),{
        ...item,
      });
    }
  }
  public update(item: Account){
    let tempID = (item as any)['id'];
    console.log(tempID)
    updateDoc(doc(this.firestore, 'item', tempID),{
      ...item,
    });
    
  }
  public delete(item: Account){
    let tempID = (item as any)['id'];
    deleteDoc(doc(this.firestore, 'item', tempID));
  }
  

  public ref = collection(this.firestore, 'item');
  
  getDatafromFB(){
    return collectionData(this.ref,{idField:'id'});
  }
}

