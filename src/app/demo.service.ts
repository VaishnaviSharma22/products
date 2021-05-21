import { FormGroup , FormControl , Validator, Validators} from '@angular/forms';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  globalResponse:any;
 products:any;
  public url:string ="http://localhost:4200/products";
  constructor(private http : HttpClient) {
    this.products=[
      {"id":1,"name":"MI","amount":18000},
      {"id":2,"name":"Oppo","amount":20000},
      {"id":3,"name":"Vivo","amount":25000},
      {"id":4,"name":"Realme","amount":15000},
    ];
  }
  getdata(){
    return this.products;
  }
  insertCustomer(product:any){
    //  return this.http.post(this.url,product);
    this.products.push(product);
  }
  updatecustomer(prod:any){
    this.products.splice(this.products.indexOf(prod),1);
    this.products.push(prod);
    console.log(prod);
  }
  loggedIn(){
    return localStorage.getItem('token');
  }
  getToken(){
    return !!localStorage.getItem('token')
  }


}
