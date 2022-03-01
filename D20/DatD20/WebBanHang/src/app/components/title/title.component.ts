import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth, authState, signInAnonymously, signOut, User } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  public user:any;

  constructor(public router: Router, private auth: Auth) { 
    if(auth){
      authState(auth).subscribe((res:any)=>{
        this.user = res;
        console.log(this.user);
      })
    }
  }

  public async login() {
    
    try {
    await signInWithPopup(this.auth, new GoogleAuthProvider());
    } catch (error) {
      console.log(error); 
    }
  }

  public async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
  }
  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

  submit(){
    alert('hehe')
  }


}
