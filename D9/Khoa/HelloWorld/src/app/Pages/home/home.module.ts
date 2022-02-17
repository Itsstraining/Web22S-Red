import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {  } from './../../shared/shared.module'
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    ShareModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
