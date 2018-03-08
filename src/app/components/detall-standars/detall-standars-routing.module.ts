import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,Router,RouterModule } from "@angular/router";
import { DetallStandarsComponent } from './detall-standars.component';

const rourtes: Routes=[{path:'',component:DetallStandarsComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rourtes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class DetallStandarsRoutingModule { }
