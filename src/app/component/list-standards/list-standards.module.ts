import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStandardsRoutingModule } from './list-standards-routing.module';
import { ListStandardsComponent } from './list-standards.component';

@NgModule({
  imports: [
    CommonModule,
    ListStandardsRoutingModule
  ],
  declarations: [ListStandardsComponent]
})
export class ListStandardsModule { }
