import { Component, OnInit } from '@angular/core';
import { StandaresService } from '../../services/standares.service';
import { AuthService } from '../../services/auth.service';
import { Standards } from '../../models/standards';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-detail-standards',
  templateUrl: './detail-standards.component.html',
  styleUrls: ['./detail-standards.component.css'],
  providers: [StandaresService, AuthService]
})
export class DetailStandardsComponent implements OnInit {

  public Standards = [];

  constructor(public _StandaresService: StandaresService, public _AuthService: AuthService) { }

  ngOnInit() {
    this.getStandars();
  }

  getStandars() {
    let token = localStorage.getItem('token');
    this._AuthService.getStandards(token).subscribe(
      response => {
        if (!response.result){
          swal('', 'expired session', 'info');
          localStorage.removeItem('user');
          this._AuthService.sessionValidate();
          return;
        }

        if (response.data[0] !== undefined) {

          for (let standard of response.data[0].standards) {
            this.Standards.push({ 'id': standard.id, 'name': standard.name, 
            'option': standard.option, 'id_oportunity':response.data[1].id ,
              'order': standard.meta.order_id})
          }

          this.Standards = this.Standards.sort(function (a, b) {
            return (a.order - b.order)
          })
          console.log(this.Standards);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  saveStandar(e) {
    console.log(e);
  }

}
