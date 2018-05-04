import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, Router, RouterModule } from "@angular/router";
import { ComponentComponent } from './component.component';

const Rourte: Routes = [
  {
    path: '', component: ComponentComponent, children: [
      { path: 'standards', loadChildren: './detail-standards/detail-standards.module#DetailStandardsModule' },
      { path: 'list-standards', loadChildren: './list-standards/list-standards.module#ListStandardsModule' },
      { path: '', redirectTo: 'standards' }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
   RouterModule.forChild(Rourte)
  ],
  exports: [RouterModule],
})
export class ComponentRoutingModule { }
