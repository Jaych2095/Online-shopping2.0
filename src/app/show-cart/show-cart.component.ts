import { Component, OnInit } from '@angular/core';
import { CartItem } from '../services/cart-item';
import { CartService } from '../services/cart.service';
import { NotificationService } from '../services/notification.service';
import { Product } from '../services/product';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  public cartProducts:CartItem[]=[];
  public productData: Product[] = [];
  public isloading:boolean=false;
  constructor(private toaster:NotificationService,private dataService:CartService) { }

  ngOnInit(): void {
    this.getCartData(1);
  }
  public getCartData(id:number):void
  {
    this.dataService.getCartData(id).subscribe(response => {
      this.cartProducts = response['productData'];
    }, error =>{
      //  this.isError=true;
        //this.errorMsg=error.message;
    });
    this.dataService.getAllProducts().subscribe(response => {
      // console.log(response);
      for (let i = 0; i < Object.keys(response).length; i++) {
        this.productData.push({ 
          id: response[i]['id'], 
          title: response[i]['title'], 
          price: response[i]['price'], 
          category: response[i]['category'],
          description : response[i]['description'],
          avatar : response[i]['image'] 
        });
      }
  }, error =>{
    //this.isError=true;
    //this.errorMsg=error.message;
  });  
     // this.isLoading=false;
  }
  

  public decreaseQuantity(id:number):void
  {
   
      this.cartProducts[id]['quantity']--;
      this.toaster.showInfo("Unit Quantity Decreased","Website Says:");
    
  }
  
  public increaseQuantity(id:number):void
  {
    
      this.cartProducts[id]['quantity']++;
      this.toaster.showInfo("Unit Quanity Increased","Website Says:");

    
  }
}
