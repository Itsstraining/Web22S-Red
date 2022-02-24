import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { ItemComponent } from 'src/app/components/item/item.component';
import { ListItemComponent } from 'src/app/components/list-item/list-item.component';


@NgModule({
  declarations: [
    ListItemComponent,
    ItemComponent,
    CarouselComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [
    ListItemComponent,
    ItemComponent,
    CarouselComponent
  ],

  providers: [],
  bootstrap: []
})
export class ShareModule { }
