import { LoginComponent } from './login/login.component';
import { DemoService } from './demo.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor( private demoService:DemoService,
    private router: Router){}

   canActivate() : boolean {
       if( this.demoService.loggedIn()){
         return true
       }
       else{
         this.router.navigate(['/LoginComponent'])
         return false
       }
   }

}
