import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  providers: [AuthService]
})
export class AsideComponent implements OnInit {

  constructor(public _AuthService:AuthService) { }

  ngOnInit() {
    this._AuthService.sessionValidate();
  }


  logout() {
    localStorage.removeItem('user');
    this._AuthService.sessionValidate();
  }

  


}
