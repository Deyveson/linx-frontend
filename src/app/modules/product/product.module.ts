import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';


import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CardProductComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule
  ],
  exports: [CardProductComponent]
})
export class ProductModule { }
