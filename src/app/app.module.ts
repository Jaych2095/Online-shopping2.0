import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayItemComponent } from './display-item/display-item.component';
import { AuthService } from './services/auth-service';
import { LoadingSpinnerComopnent } from './loading-spinner/loading-spinner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './services/app-routing.module';

import { AuthGuard } from './services/auth-guard';
import { PostService } from './services/Postdata.service';
import {SearchFilterPipe} from './services/filter.pipe';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { CartService } from './services/cart.service';
import { ProductEditComponent } from './display-item/product-edit/product-edit.component';
import { authIntercepterService } from './services/auth-interceptor.sevice';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComopnent,
    LoginComponent,
    RegisterComponent,
    DisplayItemComponent,
    SearchFilterPipe,
    ShowCartComponent,
    ProductEditComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [AuthService,AuthGuard,PostService,CartService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:authIntercepterService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
