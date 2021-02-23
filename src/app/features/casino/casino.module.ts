import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasinoComponent } from './casino.component';
import { CasinoRoutingModule } from './casino.routing.module';
import { RouletteComponent } from './roulette/roulette.component';
import { AdrenalineComponent } from './adrenaline/adrenaline.component';
import { BgsLiveSharedModule } from 'src/app/shared/shared.module';
import { MyBetsComponent } from './adrenaline/my-bets/my-bets.component';
import { TopBpsComponent } from './adrenaline/top-bps/top-bps.component';
import { GameComponent } from './adrenaline/game/game.component';
import { BetComponent } from './adrenaline/game/bet/bet.component';
import { UserBetsComponent } from './adrenaline/user-bets/user-bets.component';



@NgModule({
  declarations: [
    CasinoComponent,
    RouletteComponent,
    AdrenalineComponent,
    MyBetsComponent,
    TopBpsComponent,
    GameComponent,
    BetComponent,
    UserBetsComponent
  ],
  imports: [
    CommonModule,
    CasinoRoutingModule,
    BgsLiveSharedModule
  ]
})
export class CasinoModule { }
