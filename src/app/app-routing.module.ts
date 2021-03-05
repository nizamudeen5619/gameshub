import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'category',component:CategoryComponent},
  {path:'productdetail', component:ProductDetailComponent},
  {path:'cart', component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'admin/productlist',component:ProductlistComponent},
  {path:'admin/addproduct',component:AddproductComponent},
  {path:'admin/editproduct/:id',component:EditproductComponent},
  {path:'productdetail/:id', component:ProductDetailComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'**',redirectTo:'/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
