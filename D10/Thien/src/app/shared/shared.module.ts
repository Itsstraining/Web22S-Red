import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ListItemsComponent} from '../../app/components/list-items/list-items.component'
import { FooterComponent } from '../components/footer/footer.component';
import { ItemComponent } from '../components/item/item.component';
import { QuantityComponent } from '../components/quantity/quantity.component';
@NgModule({
  declarations: [
    ListItemsComponent,
    ItemComponent,
    QuantityComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListItemsComponent,
    ItemComponent,
    QuantityComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
