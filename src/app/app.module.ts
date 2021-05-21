import { EmployeeManagementModule } from './employee-management/employee-management.module';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { DemoService } from './demo.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './Update/update.component';
import { AccountComponent } from './account/account.component';
import { inject, NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PhoneComponent } from './phone/phone.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { CustomDirective } from './custom.directive';
import { NewproComponent } from './newpro/newpro.component';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    ListComponent,
    LoginComponent,
    ShopComponent,
    HomeComponent,
    AccountComponent,
    PhoneComponent,
    CustomDirective,
    NewproComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    EmployeeManagementModule
  ],

  providers: [
    DemoService , AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})

export class AppModule {}
export class OrderModule {}
