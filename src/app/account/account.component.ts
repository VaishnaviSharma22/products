import { RouterModule,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }


}
