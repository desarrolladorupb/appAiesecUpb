import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,Router,RouterModule } from "@angular/router";
import { ErrorComponent } from './error.component';

const Rourte:Routes = [
	{path:'',component:ErrorComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Rourte)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ErrorRoutingModule { }
