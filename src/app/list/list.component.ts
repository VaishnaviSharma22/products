import { NewproComponent } from './../newpro/newpro.component';
import { DemoService } from './../demo.service';
import { PhoneComponent } from './../phone/phone.component';
import { HomeComponent } from './../home/home.component';
import { AccountComponent } from './../account/account.component';
import { ShopComponent } from './../shop/shop.component';
import { FormsModule } from '@angular/forms';
import { by } from 'protractor';
import { UpdateComponent } from './../Update/update.component';
import { Component, OnInit, Injectable, inject } from '@angular/core';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';
import { Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  alert:boolean = true;
  @Input () UpdateComponent :any[]=[];
  @Output() savereq = new EventEmitter<any>();
  inputCustomer:any;
  public products:any=[];
   constructor( private activatedrouter:ActivatedRoute ,
      private _router: Router,
      private demoservice: DemoService) { }
  ngOnInit() {
    this.products = this.demoservice.getdata();
  }
  onAddClick(){
   this._router.navigate(['/NewproComponent']);
  }
 delete(product:any){
    console.log(product);
    this.products.splice(this.products.indexOf(product),1);
    console.log(this.products);
  }
 edit(id:number){
   this._router.navigate(['/UpdateComponent/'+id]);
  }

}

