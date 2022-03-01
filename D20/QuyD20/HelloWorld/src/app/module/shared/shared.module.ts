import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
      CommonModule,
      MatIconModule,
      MatButtonModule,
  ],
  exports: [
    ListItemComponent,
    ItemComponent,
    CarouselComponent,
  ],

  providers: [],
  bootstrap: []
})
export class ShareModule { }
