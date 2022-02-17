import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ShareModule } from './shared/share.module';
import { FottersComponent } from './components/fotters/fotters.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FottersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ShareModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
