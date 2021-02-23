import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportRoutingModule } from './sport-routing.module';
import { SportComponent } from './sport.component';
import { MatchComponent } from './match/match.component';
import { TicketComponent } from './ticket/ticket.component';
import { BgsLiveSharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SportComponent,
    MatchComponent,
    TicketComponent],
  imports: [
    CommonModule,
    SportRoutingModule,
    BgsLiveSharedModule
  ]
})
export class SportModule { }
