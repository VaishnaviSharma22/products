import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeManagementComponent,
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    FormsModule,
  ]

})
export class EmployeeManagementModule { }
