import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStandarsRoutingModule } from './list-standars-routing.module';
import { ListStandarsComponent } from './list-standars.component';

@NgModule({
  imports: [
    CommonModule,
    ListStandarsRoutingModule
  ],
  declarations: [ListStandarsComponent]
})
export class ListStandarsModule { }
