import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,Router,RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

const rourtes: Routes = [
	{path:'',loadChildren:'./login/login.module#LoginModule'},
	{path:'login',loadChildren:'./login/login.module#LoginModule'},
	{path:'app',loadChildren:'./components/components.module#ComponentsModule'},
  {path:'error',loadChildren:'./error/error.module#ErrorModule'},
  {path:'**',redirectTo:'error'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rourtes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
