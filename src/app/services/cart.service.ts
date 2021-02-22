import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from './cart-item';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private URL='https://fakestoreapi.com/';
  public data: Product[]=[];
  constructor(private http: HttpClient) { }

  public getAllProducts() {
    return this.http.get<Product[]>(this.URL+'products');        
}

public addToCart(id:number) {
    return this.http.post<any>
        (this.URL+'carts',
        '{"userId" : 1, "date" : ,products:[{productId:this.data[id][productId],quantity:1}}'
        );
}

public getCartData(id:number){
    return this.http.get<any>(this.URL+'carts/'+id);
}
}