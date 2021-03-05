import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_items: any = [];
  total_price:number=0
  constructor(
    private cartServ: CartService  ) {

  }

  ngOnInit(): void {
    this.cart_items=this.cartServ.getItems()
    for(let item of this.cart_items){
      this.total_price+=parseInt(item.ProductPrice)
    }
  }
}
