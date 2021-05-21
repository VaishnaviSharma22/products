import { HttpClient , HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { DemoService } from './../demo.service';
import { ListComponent } from './../list/list.component';
import { Component, OnInit ,Input ,Output, EventEmitter} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, provideRoutes, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 alert:boolean = true;
 @Input () UpdateComponent :any[]=[];
 @Output() savereq = new EventEmitter<any>();

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

 this.products=this.demoservice.getdata();
 let editproduct =this.products.filter((product:any )=> product.id == this.route.snapshot.paramMap.get('id'))
 this.form.patchValue({id:editproduct[0].id, name:editproduct[0].name, amount : editproduct[0].amount})
 console.log(editproduct)
  }
  get f (){
    return this.form.controls;
  }

  submit (){
      this.submitted = true;
      if (this.form.invalid) {
      return;
  }
      this.route.snapshot.paramMap.get('id');
      this.inputCustomer=this.form.value;
      this.demoservice.updatecustomer(this.form.value);
      console.log(this.inputCustomer);
      // this.demoservice.insertCustomer(this.inputCustomer)
      this.router.navigate(['/ListComponent']);
  }

  ngOnInit(){

  }

}
