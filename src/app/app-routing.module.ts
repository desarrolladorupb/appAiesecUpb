import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

const rourtes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'app', loadChildren: './component/component.module#ComponentModule' },

] 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rourtes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
