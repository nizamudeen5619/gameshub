import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
product:any=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((result) =>{
      this.product = result['standup'];
    });
  }
productdelete(id:any){
  this.productService.deleteProduct(id).subscribe((result)=>{
    alert('Product Deleted Successfully')
    this.ngOnInit();
  });
}
}
