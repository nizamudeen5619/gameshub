import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { CartService } from "../cart.service";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:any=[];
  productid: string;
  constructor(
    private productService: ProductService,
    private cartServ:CartService,
    activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.productid = activateRoute.snapshot.params.id;
    console.log(this.productid);
  }

  ngOnInit(): void {
    this.productService.getProductById(this.productid).subscribe((result) => {
      this.product = result['standup'];
    });
  }
  addToCart(product){
    this.cartServ.addToCart(product)
    window.alert('Your Item has been added to the Cart')
}
  }