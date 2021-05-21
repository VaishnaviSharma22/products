import { ListComponent } from './../list/list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { DemoService } from './../demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpro',
  templateUrl: './newpro.component.html',
  styleUrls: ['./newpro.component.css']
})
export class NewproComponent implements OnInit {
  products:any=[];
  form:any;
  inputCustomer:any;
  result:any;
  globalResponse:any;
  submitted=false;
  constructor(private demoservice: DemoService , fb: FormBuilder, private route:ActivatedRoute
    , private router: Router) {
      this.form = fb.group({
        id:['',Validators.required],
        name:['',Validators.required],
        amount:['',Validators.required],
        })
    }
    get f (){
      return this.form.controls;
    }

  submit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
    this.inputCustomer=this.form.value;
    console.log(this.inputCustomer);
    this.demoservice.insertCustomer(this.inputCustomer);
    this.router.navigate(['/ListComponent']);
  }
  ngOnInit(): void {
  }

}
