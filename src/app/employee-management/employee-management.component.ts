import { FilterPipe } from './../filter.pipe';
import { EmployeeService } from './../employee.service';
import { UpdateEmployeeComponent } from './../update-employee/update-employee.component';
import { AddEmployeeComponent } from './../add-employee/add-employee.component';
import { Router , ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl, Validator,Validators, FormsModule } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
 @Input () AddEmployeeComponent :any[]=[];
 @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
 @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
 filterString = '';
 employees:any=[];
 res:any;
 query:any;
 inputemployee:any;
 constructor(private http : HttpClient, private router : Router, private employeeservice : EmployeeService) {

 }

  delete(employee:any){
    console.log(employee);
    this.employees.splice(this.employees.indexOf(employee),1);
    console.log(this.employees);
  }
  add(){
    this.router.navigate(['/AddEmployeeComponent']);
  }
  update(id:number){
     this.router.navigate(['/UpdateEmployeeComponent/'+id]);
  }
  ngOnInit() {
    this.employees = this.employeeservice.getdata();
  }

}
