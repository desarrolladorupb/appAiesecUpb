import { Component, OnInit } from '@angular/core';
import {StandaresService} from '../../services/standares.service';
import { AuthService } from '../../services/auth.service';
import { Standards } from '../../models/standards';
import swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-list-standards',
  templateUrl: './list-standards.component.html',
  styleUrls: ['./list-standards.component.css'],
  providers: [StandaresService, AuthService]
})
export class ListStandardsComponent implements OnInit {

  public Standards = [];

  constructor(public _StandaresService: StandaresService, public _AuthService: AuthService) { }

  ngOnInit() {
    this.getStandars();
    this.validateCheck();
  }

  getStandars(){
    let token = localStorage.getItem('token');
    this._AuthService.getStandards(token).subscribe(
      response =>{
console.log(response);
        if (!response.result) {
          swal('', 'expired session','info');
          localStorage.removeItem('user');
          this._AuthService.sessionValidate();
          return;
        }
      if(response.data[0] !== undefined){
        for (let standard of response.data[0].standards){
          this.Standards.push({ 'id': standard.id, 'name': standard.name, 
          'option': standard.option, 'id_oportunity': response.data[1].id,
            'order': standard.meta.order_id })
        }
      } 
      
        this.Standards = this.Standards.sort(function (a, b) {
          return (a.order - b.order)
        })
        console.log(this.Standards);
      },
      error =>{
      console.log(error);
      }
    )
  }

  buttonTrue(e){
      this._AuthService.putStandards(e,true).subscribe(
      response => {
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    );
  }

  buttonFalse(e) {
    this._AuthService.putStandards(e, false).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  validateCheck(){
   (() => {
     $(document).on('click', ".check-disabled",function(){
       $(this).parents('tr').find('.radio').prop('disabled',true);
     })
   })();
  }

}
  