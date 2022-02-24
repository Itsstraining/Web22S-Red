import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { Auth, authState, signInAnonymously, signOut, User, signInWithPopup, GoogleAuthProvider, EmailAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  private readonly userDisposable: Subscription|undefined;
  public readonly user: Observable<User | null> = EMPTY;
  
  showLoginButton = false;
  showLogoutButton = false;
  public _user:any;
  constructor( 
    private route:Router,
    private auth:Auth
    ) {
    if(auth){
      authState(auth).subscribe((res:any)=> {
        this._user = res
        console.log(this._user)
      })
      
    }
   }

  ngOnInit(): void {
  }

  public async login(){
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider())
    } catch (error) {
      console.log(error)
    }
  }

  async logOut(){
    try {
      await signOut(this.auth)
    } catch (error) {
      console.log(error)
    }
  }

  ngOnDestroy(): void{
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }

  }



