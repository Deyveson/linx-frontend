import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";

const API = 'http://localhost:9000';

@Injectable()
export class ProductCardService{

  public term= new BehaviorSubject<any>(false);
  public qtdProduct = new BehaviorSubject<any>(false);

  constructor(private http: HttpClient) {
    this.term.asObservable();
    this.qtdProduct.asObservable();
  }

  listFromProduct(terms) {
    return this.http.get<any>(API + `/searchById?terms=` + terms );
  }

  setQtdProduct(value){
    this.qtdProduct = value;
  }

  getQtdProduct(){
    return this.qtdProduct;
  }
}
