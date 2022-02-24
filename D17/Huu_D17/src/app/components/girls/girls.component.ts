import { Component, OnInit } from '@angular/core';
import { Auth, authState, signInAnonymously, signOut, User, signInWithPopup, GoogleAuthProvider  } from '@angular/fire/auth';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { traceUntilFirst } from '@angular/fire/performance';
import { Router } from '@angular/router';
@Component({
  selector: 'app-girls,app-auth',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.scss']
})
export class GirlsComponent implements OnInit {
  public user:any;
  public _user:any;
  constructor(public auth:Auth, public router:Router) {
    if(auth){
      authState(auth).subscribe((res)=>{
        this._user = res
        console.log(this._user)
      })
    }
  }

  ngOnInit(): void {
  }

  async login(){
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider());
    } catch (error) {
      alert('Người dùng nứng kh nhập nữa!')
    }
  }

  logout(){
    signOut(this.auth).then((res:any)=>console.log(res)).catch((err:any)=>console.log(err))
  }

  
}
