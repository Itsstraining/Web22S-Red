import { Injectable } from '@angular/core';
import {collectionData,docData, collection, Firestore} from '@angular/fire/firestore'
import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Girl } from '../models/girl.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  public data=[
    {
      id:1,
      photourl: "../../../assets/manhboi.jpg",
      name: "Mạnh Đồng Đức",
      age: "23 tuổi",
      price: 15000,
      timelimit: 0
    },
    {
      id:2,
      photourl: "../../../assets/trongboi.jpg",
      name: "Chúa Tể Rạp Xiếc",
      age: "20 tuổi",
      price: 10000,
      timelimit: 0
    },
    {
      id:3,
      photourl: "https://kenh14cdn.com/thumb_w/600/2016/0a0e4df1-ffbd-49eb-acb6-cac2990a3410-1455613937662.jpg",
      name: "Nguyễn Thị Happy Bolla",
      age: "18 tuổi",
      price: 100000,
      timelimit: 0
    },
    {
      id:4,
      photourl:"https://file.tinnhac.com/resize/600x-/2020/01/20/20200120091526-2121.jpg",
      name: "Huỳnh Nguyễn Linh Ly",
      age: "24 tuổi",
      price: 50000,
      timelimit: 0
    },
    {
      id:5,
      photourl: "https://image-us.24h.com.vn/upload/2-2021/images/2021-05-14/anh-2-1620960408-576-width660height880.jpg",
      name: "Huỳnh Minh Thư",
      age: "16 tuổi",
      price: 40000,
      timelimit: 0
    },
    {
      id:6,
      photourl: "https://sunglasshutusa.com/hinh-anh-gai-dep-facebook/imager_4_2044_700.jpg",
      name: "Linh Ka",
      age: "19 tuổi",
      price: 30000,
      timelimit: 0
    },
    {
      id:7,
      photourl: "https://gaixinh24h.com/wp-content/uploads/2020/03/hinh-gai-dep-tu-nhien-gaixinh24h-7.jpg",
      name: "Nguyễn Thị Thúy Nga",
      age: "21 tuổi",
      price: 80000,
      timelimit: 0
    },
    {
      id:8,
      photourl: "../../../assets/huuboi.jpg",
      name: "Huỳnh Hữu",
      age: "22 tuổi",
      price: 60000,
      timelimit: 0
    },
    {
      photourl:"https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-3.jpg",
      name: "Kiều Thanh",
      age: "22 tuổi",
      price: "70.000/h"
    }
    
  ]
  public collect = collection(this.firestore, 'girls');
  public pushData(){
    
    for (let girl of this.data)
    {
      addDoc(this.collect,this.data);
    }
  }
  
  
  
  public createListenerData(data: Girl[]) {
    return collectionData(this.collect, {
      idField: 'id',
    });
  }
  public updateAllData() {
    for (let girl of this.data) {
      let tempId = (girl as any)['id'];
      updateDoc(doc(this.firestore, 'girls', tempId), {
        ...girl,
      });
    }
  }
  public update(girl: Girl) {
    let tempId = (girl as any)['id'];
    updateDoc(doc(this.firestore, 'girls', tempId), {
      ...girl,
    });
  }
  public delete(girl: Girl) {
    let tempId = (girl as any)['id'];
    deleteDoc(doc(this.firestore, 'girls', tempId));
  }
  
  constructor(public firestore:Firestore) { }



  
}
