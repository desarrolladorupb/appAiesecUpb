import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Routes, Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(public _http:Http,public router:Router) { }

  getToken(rform){
    let url = 'http://138.197.119.196/lcperformance/inicio_sesion_expa/?correo='+rform.email+'&password='+rform.password+'';
    return this._http.get(url).map(res => res.json());
  }

  getCurrentPerson(token){
    let url = 'https://gis-api.aiesec.org/v2/current_person.json?access_token='+token+'';
    return this._http.get(url).map(res => res.json());
  }
 
  getStandards(token){
    let url = 'http://138.197.119.196/lcperformance/get_opportunities/?token='+token+''; 
    return this._http.get(url).map(res => res.json());
  }

  putStandards(obj,value){
    let url = 'https://gis-api.aiesec.org/v2/applications/'+obj.id_oportunity+'/update_standards';
    let token = localStorage.getItem('token');
    let data = 'access_token=' + token + '&application%5Bstandards%5D%5Bid%5D=' + obj.id + '&application%5Bstandards%5D%5Boption%5D=' + value +'';
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.patch(url, data, { headers: headers });
  }
  
  sessionValidate() {
    let validate = localStorage.getItem('user');
    if (!validate)
      this.router.navigate(['/']);
    
  }
  
  
}
