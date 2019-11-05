import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from "rxjs";

const API = 'http://localhost:9000';

@Injectable()
export class ProductCardService{

  public term= new Subject();
  public qtdProduct = new BehaviorSubject<any>(0);

  constructor(private http: HttpClient) {
    this.term.asObservable();
    this.qtdProduct.asObservable();
  }

  listFromProduct(terms) {
    return this.http.get<any>(API + `/search?terms=` + terms );
  }

}
