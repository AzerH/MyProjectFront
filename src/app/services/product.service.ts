import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://localhost:44364/api/products/getall';
  getProducts() : Observable <ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
      
  }
}
