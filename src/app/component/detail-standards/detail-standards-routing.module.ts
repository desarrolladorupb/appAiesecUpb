import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from "@angular/router";
import { DetailStandardsComponent } from './detail-standards.component';

const rourtes: Routes = [{ path: '', component: DetailStandardsComponent }]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rourtes)
  ],
  exports: [RouterModule],
})
export class DetailStandardsRoutingModule { }
