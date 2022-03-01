import { Component, Input, OnInit } from '@angular/core';
import { updateDoc, Firestore, doc } from '@angular/fire/firestore';
import { Account } from 'src/app/models/account.model';
import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data: Account[] = [];
  constructor(public dataSv: DataService, private _FireStore: Firestore) {
    dataSv.createListenerData(this.data).subscribe((value)=>{
      this.data = value as Account[];
      this.dataSv.data= value as Account[];

      console.log(this.data)
    });
  }

  ngOnInit(): void {
  }


}
