import { TokenInterceptorService } from './token-interceptor.service';
import { DemoService } from './demo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'products';
  constructor( private activatedrouter:ActivatedRoute,
    private _router: Router) { }

}
