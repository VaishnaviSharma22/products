import { EmployeeService } from './../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  form:any;
  inputemployee:any;
  result:any;
  employees:any=[];
  globalResponse:any;
  submitted=false;
  constructor(fb: FormBuilder, private route:ActivatedRoute
    , private router: Router,private employeeservice: EmployeeService) {
      this.form = fb.group({
        id:['',Validators.required],
        fname:['',Validators.required],
        lname:['',Validators.required],
        email:['',Validators.required],
        mobileno:['',Validators.required],
        })
 this.employees=this.employeeservice.getdata();
 let editemployee =this.employees.filter((product:any )=> product.id == this.route.snapshot.paramMap.get('id'))
 this.form.patchValue({id:editemployee[0].id, fname:editemployee[0].fname,
  lname:editemployee[0].lname,email : editemployee[0].email,mobile : editemployee[0].mobile})
 console.log(editemployee)
  }

  get f (){
    return this.form.controls;
  }

  submit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
  this.route.snapshot.paramMap.get('id');
      this.inputemployee=this.form.value;
      this.employeeservice.updateemployee(this.form.value);
      console.log(this.inputemployee);
      this.router.navigate(['/employee-management']);
}
  ngOnInit(): void {
  }

}
