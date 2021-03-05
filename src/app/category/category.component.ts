import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
product:any=[];
categorisedProduct:any=[]
category:string;
  constructor(
    private productService:ProductService) {  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      result=>this.product = result['standup']
    )
  }
  getCategory(){
    this.category = (<HTMLSelectElement>document.getElementById('category')).value;
    this.filterByCategory()
  }
  filterByCategory(){
    this.categorisedProduct=this.product.filter(data=>{
      if(data.ProductCategory===this.category){
        return true
      }
    })
    this.category=""
  }

}
