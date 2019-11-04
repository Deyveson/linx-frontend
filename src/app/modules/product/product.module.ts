import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from "@angular/common/http";

import {ProductCardService} from "../../service/product-card-service";
import { CardProductComponent } from './card-product/card-product.component';

@NgModule({
  declarations: [
    CardProductComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [CardProductComponent],
  providers: [ProductCardService]
})
export class ProductModule { }
