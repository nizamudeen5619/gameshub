import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import{Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product:any={};
productid:string;
  constructor(private productService:ProductService, activateRoute: ActivatedRoute, private router:Router) {
    this.productid=activateRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    this.productService.getProductById(this.productid).subscribe((result)=>{
    this.product={
      _id:result['standup']._id,
      ProductName:result['standup'].ProductName,
      ProductCategory:result['standup'].ProductCategory,
     ProductPrice:result['standup'].ProductPrice,
      ProductDesc:result['standup'].ProductDesc,
      ProductImage:result['standup'].ProductImage,
    };
  });

}
productEdit() {
  this.productService.putProduct(this.product).subscribe((result)=>{
    alert('Product Edited Successfully')
    this.router.navigate(['/admin/productlist']);
  })
}
}