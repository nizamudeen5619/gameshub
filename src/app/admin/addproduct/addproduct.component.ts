import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import{Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
product:any={};
filesToUpload: Array<File> =[];

  constructor(private productservice:ProductService,
    activateRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.product={
      ProductName: '',
      ProductCategory: '',
      ProductDesc: '',
      ProductPrice: '',
      ProductImage: '',
    };
  }
productAdd(){
  this.productservice.postProduct(this.product).subscribe((result) =>{
    alert('Product Added Successfully')
    this.router.navigate(['/admin/productlist']);
  
  });
}
upload() {
  const formData: any = new FormData();
  const files: Array<File> = this.filesToUpload;
  console.log(files);

  for(let i=0;i< files.length; i++) {
    formData.append('uploads[]', files[i], files[i]['name']);
  }
  console.log('form data variable :  ' + formData.toString());

  this.productservice.fileupload(formData).subscribe((files) =>{
    console.log(files);
    this.product.ProductImage = 'http://localhost:8081/resources/' + files[0].filename;
  });
}

fileChangeEvent(fileInput: any){
  this.filesToUpload = <Array<File>>fileInput.target.files;

}
}
