import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { CarouselComponent } from 'src/app/bgslive-components/carousel/carousel.component';
import { BgsLiveSharedModule } from 'src/app/shared/shared.module';
import { InformationComponent } from '../information/information.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CarouselComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    BgsLiveSharedModule,
  ]
})
export class MainPageModule { }
