import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';
import { ComponentRoutingModule } from './component-routing.module';
import { NabvarComponent } from './nabvar/nabvar.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  declarations: [ComponentComponent, NabvarComponent, AsideComponent]
})
export class ComponentModule { }
