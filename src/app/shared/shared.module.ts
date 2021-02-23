import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ArrowComponentComponent } from '../bgslive-components/arrow-component/arrow-component.component';
import { BgsDropdownComponent } from "../bgslive-components/bgs-dropdown/bgs-dropdown.component";
import { BgsPaginatorComponent } from "../bgslive-components/bgs-paginator/bgs-paginator.component";
import { BgsTableComponent } from "../bgslive-components/bgs-table/bgs-table.component";
import { ButtonComponentComponent } from "../bgslive-components/button-component/button-component.component";
import { InputComponent } from "../bgslive-components/input/input.component";
import { AuthorizationService } from '../core/authorization/authorization-service';
import { LocalizePipe } from '../core/localization/localize.pipe';
import { AccountService } from '../features/account/account.service';
import { PromotionComponent } from '../features/promotion/promotion.component';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [
        LocalizePipe,
        ArrowComponentComponent,
        PromotionComponent,
        InputComponent,
        ButtonComponentComponent,
        BgsTableComponent,
        BgsPaginatorComponent,
        BgsDropdownComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        LocalizePipe,
        FormsModule,
        ArrowComponentComponent,
        PromotionComponent,
        InputComponent,
        ButtonComponentComponent,
        BgsTableComponent,
        BgsDropdownComponent,
        BgsPaginatorComponent,
        TableModule
    ],
    providers: [
        AuthorizationService,
        AccountService
    ]
})

export class BgsLiveSharedModule {

}