import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { FormGroup , FormControl , Validator, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();

 employees:any=[];
 result:any;
 globalResponse:any;
  constructor(private http : HttpClient) {

this.employees=[
  { id:1, fname:"nikhil", lname:"gupta",email:"nikhil@gmail.com",mobile:99977755504},
  { id:2, fname:"sonam", lname:"rajput",email:"sonam@gmail.com",mobile:99977755504},
  { id:3, fname:"vidhi", lname:"dubey",email:"vidhi@gmail.com",mobile:99977755504},
  { id:4, fname:"rohit", lname:"patidar",email:"rohit@gmail.com",mobile:99977755504},
  { id:5, fname:"nidhi", lname:"mishra",email:"nidhi@gmail.com",mobile:99977755504},
  { id:6, fname:"shivenrdra", lname:"rajput",email:"shivendra@gmail.com",mobile:99977755504},
  { id:7, fname:"atik", lname:"rajput",email:"atik@gmail.com",mobile:99977755504},
  { id:8, fname:"nitish", lname:"gupta",email:"nitish@gmail.com",mobile:99977755504},
  { id:9, fname:"abhishek", lname:"gupta",email:"abhishek@gmail.com",mobile:99977755504},
  { id:10, fname:"abhinav", lname:"gupta",email:"abhinav@gmail.com",mobile:99977755504},
  { id:11, fname:"bhavna", lname:"gupta",email:"bhavna@gmail.com",mobile:99977755504},
  { id:12, fname:"diksha", lname:"gupta",email:"diksha@gmail.com",mobile:99977755504},
  { id:13, fname:"himanshi", lname:"gupta",email:"himanshi@gmail.com",mobile:99977755504},
  { id:14, fname:"ishika", lname:"gupta",email:"ishika@gmail.com",mobile:99977755504},
  { id:15, fname:"jay", lname:"gupta",email:"jay@gmail.com",mobile:99977755504},
]
  }

  getdata(){
    return this.employees;
  }
  insertemployee(employee:any){
    this.employees.push(employee);
}
updateemployee(emp:any){
  this.employees.splice(this.employees.indexOf(emp),1);
  this.employees.push(emp);
  console.log(emp);
}
search(filters: any): void {
  Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
  this.groupFilters.emit(filters);
}

}
