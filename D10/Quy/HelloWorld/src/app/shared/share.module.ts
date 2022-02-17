
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { ItemComponent } from '../components/item/item.component';
import { ListItemComponent } from '../components/list-item/list-item.component';
@NgModule({
  declarations: [
    ListItemComponent,
    ItemComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListItemComponent,
    ItemComponent,
    CarouselComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ShareModule { }
