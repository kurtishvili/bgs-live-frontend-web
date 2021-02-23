import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AdrenalineComponent } from "./adrenaline/adrenaline.component";
import { CasinoComponent } from './casino.component';
import { RouletteComponent } from './roulette/roulette.component';

const routes: Routes = [
    { path: '', component: CasinoComponent },
    { path: 'roulette', component: RouletteComponent },
    { path: 'adrenaline', component: AdrenalineComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class CasinoRoutingModule {

}