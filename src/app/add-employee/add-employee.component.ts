import { ListComponent } from './../list/list.component';
import { EmployeeManagementModule } from './../employee-management/employee-management.module';
import { EmployeeManagementComponent } from './../employee-management/employee-management.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form:any;
  submitted=false;
  inputemployee:any;
  constructor(private employeeservice:EmployeeService  , fb: FormBuilder, private route:ActivatedRoute
    , private router: Router ) {
    this.form = fb.group({
      id:['',Validators.required],
      fname:['',Validators.required],
      lname:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      })
   }

  ngOnInit(): void {
  }
  get f (){
    return this.form.controls;
  }
  submit(){


   this.inputemployee = this.form.value;
   console.log(this.inputemployee);
   this.employeeservice.insertemployee(this.inputemployee);
   this.router.navigate(['/employee-management'])
  }


}
