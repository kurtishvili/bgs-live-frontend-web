import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotComponent } from './slot.component';
import { SlotRoutingModule } from './slot-routing-module';



@NgModule({
  declarations: [SlotComponent],
  imports: [
    CommonModule,
    SlotRoutingModule
  ]
})
export class SlotModule { }
