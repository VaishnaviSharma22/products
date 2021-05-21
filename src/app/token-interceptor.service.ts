import { DemoService } from './demo.service';
import { Injectable ,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector : Injector) { }
   intercept(req:any , next:any){
     let demoService = this.injector.get(DemoService)
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization: `Bearer ${demoService.getToken}`
        }
      })

      return next.handle(tokenizedReq)
   }
}
