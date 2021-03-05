import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{observable, Observable, ObservableInput} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  public getAllProducts(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8081/api/product`);
  }
  public postProduct(value: any): Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:8081/api/product`,value);
  }
  public putProduct(value: any): Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:8081/api/updateproduct`,value);
  }
  public deleteProduct(productId:any): Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:8081/api/deleteproduct/${productId}`);
  }
  public getProductById(productId:any): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8081/api/product/${productId}`);
  }
  public fileupload(value: any):Observable<any[]>{
    return this.http.post<any[]> ('http://localhost:8081/api/upload', value);
  }
}