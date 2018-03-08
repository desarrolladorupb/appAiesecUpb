import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,Router,RouterModule } from "@angular/router";
import { ListStandarsComponent } from './list-standars.component';

const rourtes: Routes=[{path:'',component:ListStandarsComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rourtes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ListStandarsRoutingModule { }
