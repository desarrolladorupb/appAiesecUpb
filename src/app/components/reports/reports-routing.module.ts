import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,Router,RouterModule } from "@angular/router";
import { ReportsComponent } from './reports.component';

const rourtes: Routes=[{path:'',component:ReportsComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rourtes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ReportsRoutingModule { }
