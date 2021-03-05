import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product:string
  constructor(private router:Router) { }

  ngOnInit(): void {}
  productcategory(){
    
      console.log(this.product);
      this.router.navigate([`/category/${this.product}`]);
    }
}
