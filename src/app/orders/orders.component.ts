import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }



}
