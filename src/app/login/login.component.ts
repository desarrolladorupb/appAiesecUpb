import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import swal from 'sweetalert2';
import {Standards} from '../models/standards';
import { Routes, Router } from '@angular/router';
import { Index } from '@firebase/database/dist/esm/src/core/snap/indexes';
import { StandaresService } from '../services/standares.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, StandaresService]
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;

  constructor(private fb: FormBuilder, public _StandaresService: StandaresService, public _AuthService: AuthService,public router:Router) {

    this.rForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required])],
    });

  }

  ngOnInit() {
    this._AuthService.sessionValidate();
  }
  
  startLogin(rForm){
    this._AuthService.getToken(rForm).subscribe(
      response => {
        this.authLogin(response, rForm);
      },
      error => {
        console.log('problemas de conexion');
        return;
      },
    )
  }


  authLogin(validate, rForm){
    if (validate.result){

      localStorage.setItem('token', validate.token);
      localStorage.setItem('user',rForm.email);

      this.router.navigate(['/app/standards']);
    }else{
      swal('', 'Incorrect user or password', 'error');
    }
  }
  
 

}




