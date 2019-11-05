import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductCardService} from "../../../service/product-card-service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit, OnDestroy {

  produtos = [];
  closeSubscribe = new Subscription();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductCardService
  ) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.terms){
      this.pesqProduct(this.route.snapshot.queryParams.terms);
    }

    this.closeSubscribe = this.productService.term.subscribe(
      res=>{
        this.pesqProduct(res);
      }
    )
  }

  pesqProduct (res) {
    this.productService.listFromProduct(res).subscribe((value) => {
      this.produtos = value;
      this.productService.qtdProduct.next(value.length)
    });

  }

  ngOnDestroy(): void {
    this.closeSubscribe.unsubscribe()
  }


}
