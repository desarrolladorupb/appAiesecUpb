import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from "@angular/router"
import { LoginComponent } from './login.component'

const Rourte: Routes = [
  { path: '', component: LoginComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Rourte)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LoginRoutingModule { }
