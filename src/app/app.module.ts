//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//base component
import { AppComponent } from './app.component';

//admin components
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import {AddproductComponent} from './admin/addproduct/addproduct.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';

//other components
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    EditproductComponent,
    AddproductComponent,
    ProductlistComponent,
    CartComponent,
    CategoryComponent,
    ProductDetailComponent,
    LoginComponent,
    CheckoutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
