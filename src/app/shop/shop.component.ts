import { HomeComponent } from './../home/home.component';
import { RouterModule , Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

}
