import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  providers: [AuthService]
})
export class AsideComponent implements OnInit {

  public user_img:string;
  public user_email:string;
  public user_name:string;

  constructor(public _AuthService:AuthService) { }

  ngOnInit() {
    this._AuthService.sessionValidate();
    this.getDataPerson();
  }


  logout() {
    localStorage.removeItem('user');
    this._AuthService.sessionValidate();
  }

  getDataPerson(){
    let token = localStorage.getItem('token');
    this._AuthService.getCurrentPerson(token).subscribe(
      res => {
        this.user_img = res.person.profile_photo_url;
        this.user_email = res.person.email;
        this.user_name = res.person.full_name;
      },
      error => {
        swal('', 'connection error','warning');
      }
    )
  }

  


}
