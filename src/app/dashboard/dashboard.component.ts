import { FormControl, FormGroup,Validator } from '@angular/forms';
import { DemoService } from './../demo.service';
import { RouterModule , Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

constructor(private _router:Router , private demoservice :DemoService, private http : HttpClient) { }


  ngOnInit() {

  }



}
