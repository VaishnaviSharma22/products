import { from } from 'rxjs';
import { ListComponent } from './../list/list.component';
import { ActivatedRoute ,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators , Validator} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  submitted = false;

  constructor( private ActivatedRoute:ActivatedRoute,
               private router:Router) { }

  ngOnInit() {
     this.login = new FormGroup({
     email: new FormControl('',[Validators.required, Validators.email]),
     password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    });
  }
  get f (){
    return this.login.controls;
  }

  onClick()
  {
    this.submitted = true;
    if (this.login.invalid) {
      return;
  }
     this.router.navigate(['/ListComponent']);
  }


}
