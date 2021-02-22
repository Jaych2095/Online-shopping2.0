import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { MessengerService } from '../shared/messenger.service';
import { PostService } from '../services/Postdata.service';
//import { Product } from '../shared/product';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth-service';
import { Product } from '../services/product';
import { title } from 'process';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css'],
})
export class DisplayItemComponent implements OnInit {
  userdata: Product[] = [];
  isLoading = false;
  p: number = 1;
  @Input() productItem: Product;
  constructor(
    private toaster: NotificationService,
    private http: HttpClient,
    private sharedservice: PostService,
    private auth: AuthService,
    private cartService: CartService,
    //private msg: MessengerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onFetchPosts();
    this.isLoading = true;
    this.toaster.showInfo("Enter a keyword in given field","Have many Products?");
  }
  handleAddToCart(index: number) {
   this.cartService.addToCart(index).subscribe(
     respnseData=>{
       this.toaster.showSuccess("One Item is Added to cart","Website Says:")
     }
   )
  }

  public onFetchPosts() {
    this.sharedservice.getData().subscribe((responseData) => {
      this.userdata = responseData;
      console.log(this.userdata);
      this.isLoading = false; //this.totalPages=responseData['total_pages'];
    });
  }
  onlogout() {
    this.auth.loggedout();
    this.toaster.showSuccess(
      'Please visit us again',
      'Successfully Logged Out'
    );
    this.router.navigate(['/login']);
  }
  public onEdit(id: number): void {
    this.router.navigateByUrl(`/product/edit/${id}`);
  }
  public showmycart()
  {
    this.router.navigateByUrl(`/cart`)
  }
  resetPage()
  {
    this.p=1;
  }
  public onDelete(id:number):void{
    this.userdata.splice(id,1);
    this.toaster.showSuccess("Delete one product","Website Says:")
  }
}
