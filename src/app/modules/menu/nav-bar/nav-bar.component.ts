import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {query} from "@angular/animations";
import {ProductCardService} from "../../../service/product-card-service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              private productService: ProductCardService) { }

  ngOnInit() {
    this.termIsExist('')
  }

  qtdproducts = 0;
  title = 'linx-frontend';
  search = '';

  termIsExist(text){
    this.productService.term.next(text);
    this.router.navigate(['/search'], { queryParams: { terms: text}})
   this.productService.qtdProduct.subscribe(res => {
      this.qtdproducts = res
    })
  }

}
