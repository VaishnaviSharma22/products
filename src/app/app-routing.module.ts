import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NewproComponent } from './newpro/newpro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './Update/update.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
    { path: 'LoginComponent',  component:LoginComponent },
    { path: '' , redirectTo:'LoginComponent', pathMatch:'full'},
    { path: 'NewproComponent' , component:NewproComponent },
    { path: 'ListComponent',   component:ListComponent },
    { path: 'UpdateComponent/:id', component:UpdateComponent },
    { path: 'ShopComponent',  component:ShopComponent,canActivate:[AuthGuard]  },
    { path: 'HomeComponent',  component:HomeComponent },
    { path: 'AccountComponent', component:AccountComponent },
    { path: 'AddEmployeeComponent', component:AddEmployeeComponent},
    { path: 'UpdateEmployeeComponent/:id', component:UpdateEmployeeComponent},
    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'employee-management' , loadChildren: () => import('./employee-management/employee-management.module').then(m => m.EmployeeManagementModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export class OrderRoutingModule{}
