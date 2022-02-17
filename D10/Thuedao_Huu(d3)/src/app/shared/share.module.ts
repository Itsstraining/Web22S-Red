import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { CounterComponent } from '../components/counter/counter.component';
import { ListGirlsComponent } from '../components/list-girls/list-girls.component';
import { GirlComponent } from '../components/list-girls/girl/girl.component'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ListGirlsComponent,
    GirlComponent,
    CounterComponent
],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports:[
    GirlComponent,
    ListGirlsComponent,
    CounterComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: []
})
export class ShareModule { }
