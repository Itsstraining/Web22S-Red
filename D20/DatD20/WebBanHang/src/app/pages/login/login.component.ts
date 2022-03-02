import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {
  collection,
  collectionData,
  doc,
  docData,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { DataService } from 'src/app/services/data.service';
import { Observable, Subscription } from 'rxjs';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public data: Account[] = [];
  constructor(private firestore: Firestore, private dataSv: DataService) { 
    collectionData(this.collectItems, {
      idField: 'id',
    }).subscribe((res)=>{console.log(res)});
  }
  public collectItems = collection(this.firestore, 'Accounts');
  public submit() {
    // alert(JSON.stringify(this.userForm.value))
    let input = this.userForm.value.input.split(' ')
    if(input[1]== "+"){
      let temp = parseInt(input[0] + input[2]);
      console.log(temp);
      this.resultKQ = parseInt(input[0] + input[2]);
    } else if(input[1] == "-") {
      console.log(input[0] - input[2]);
    } else if (input[1] == "*") {
      console.log(input[0] * input[2]);
    } else if (input[1] == "/") {
      console.log(input[0] / input[2]);
    }
    return input;
  } 
  public resultKQ = 0;
  public result(){
    this.resultKQ = this.submit();
    console.log(this.resultKQ);
  }



  public userForm = new FormGroup(
    {
      input: new FormControl(''),
      result: new FormControl(this.resultKQ),
    }
  )

  ngOnInit(): void {
  }

}