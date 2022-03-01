import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: Item[] = [];
  public collecItems = collection(this.firestore,'item')
  constructor(private firestore:Firestore) {}
  public createListenerData(data:Item[]){
    return collectionData(this.collecItems,{
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
  public update(item: Item){
    let tempID = (item as any)['id'];
    console.log(tempID)
    updateDoc(doc(this.firestore, 'item', tempID),{
      ...item,
    });
    
  }
  public delete(item: Item){
    let tempID = (item as any)['id'];
    deleteDoc(doc(this.firestore, 'item', tempID));
  }
  

  public ref = collection(this.firestore, 'item');
  
  getDatafromFB(){
    return collectionData(this.ref,{idField:'id'});
  }

}
