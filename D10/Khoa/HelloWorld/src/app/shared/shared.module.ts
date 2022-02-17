import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../components/counter/counter.component';
import { ItemComponent } from '../components/item/item.component';
import { ItemsComponent } from '../components/items/items.component';
@NgModule({
  declarations: [
	CounterComponent,
	ItemsComponent,
	ItemComponent,
  ],
  imports: [
	CommonModule,
	FormsModule,
  ],
  exports: [
	ItemsComponent
  ],
  providers: [],
  bootstrap: []
})
export class ShareModule { }
