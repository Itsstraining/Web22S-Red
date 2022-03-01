import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from 'src/app/components/item/item.component';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { ItemsComponent } from 'src/app/components/list-items/items.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
  
  


@NgModule({
  declarations: [ItemComponent,
    CounterComponent,
   
    ItemsComponent,],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule
  ], 
  exports: [
    ItemComponent,
    CounterComponent,
    MatFormFieldModule,
    ItemsComponent,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule
  ],
})
export class SharedModule { }
