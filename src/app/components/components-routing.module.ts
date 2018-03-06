import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,Router,RouterModule } from "@angular/router";
import { ComponentsComponent } from './components.component';

const Rourte:Routes = [
	{path:'',component:ComponentsComponent,children:[
    {path:'',loadChildren:'./detall-standars/detall-standars.module#DetallStandarsModule'},
    {path:'listStandars',loadChildren:'./list-standars/list-standars.module#ListStandarsModule'},
    {path:'reports',loadChildren:'./reports/reports.module#ReportsModule'}]},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Rourte)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ComponentsRoutingModule { }
