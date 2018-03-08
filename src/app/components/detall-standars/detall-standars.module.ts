import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallStandarsComponent } from './detall-standars.component';
import { DetallStandarsRoutingModule } from './detall-standars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DetallStandarsRoutingModule
  ],
  declarations: [DetallStandarsComponent]
})
export class DetallStandarsModule { }
