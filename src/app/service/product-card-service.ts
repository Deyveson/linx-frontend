import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from '../models/product';

const API = 'http://localhost:9000';

export class ProductCardService {
  constructor(private http: HttpClient) {

  }

  listFromProduct(terms) {
    const params = new HttpParams().append('terms', terms.toString());
    return this.http.get<Product[]>(API, {params});
  }

}
