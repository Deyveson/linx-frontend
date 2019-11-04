import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() produtos = [];

  constructor() { }

  ngOnInit() {
  }

  
}
