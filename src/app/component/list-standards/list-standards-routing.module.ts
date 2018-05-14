import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from "@angular/router";
import { ListStandardsComponent } from './list-standards.component';

const rourtes: Routes = [{ path: '', component: ListStandardsComponent }]

@NgModule({
  imports: [
    CommonModule,
   RouterModule.forChild(rourtes)
  ],
  exports: [RouterModule],
})
export class ListStandardsRoutingModule { }
