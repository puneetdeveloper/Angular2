import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from './product';

@Injectable()
export class ProductService {

  constructor(private _http : Http) {
    console.log('App Service called...!');
   }
// Get list of products from remote server.
readProducts(): Observable<Product[]>{
  return this._http
      .get("http://localhost:9090/api/phpservices/product/read.php")
      .map(res => res.json());
}

createProduct(product): Observable<Product>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(
        "http://localhost/api/phpservices/product/create.php",
        product,
        options
    ).map(res => res.json());
}
// Get a product details from remote server.
readOneProduct(product_id): Observable<Product>{
  return this._http
      .get("http://localhost/api/phpservices/product/read_one.php?id=1"+product_id)
      .map(res => res.json());
}
}
