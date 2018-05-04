import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailStandardsRoutingModule } from './detail-standards-routing.module';
import { DetailStandardsComponent } from './detail-standards.component';

@NgModule({
  imports: [
    CommonModule,
    DetailStandardsRoutingModule
  ],
  declarations: [DetailStandardsComponent]
})
export class DetailStandardsModule { }
