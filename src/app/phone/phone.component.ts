import { RouterModule,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  constructor(private _router:Router) {
    console.log('component Loaded')
  }

  ngOnInit(): void {
  }



}
