import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/bgslive-components/bgs-toast/toast.service';
import { AppConfigurationService } from 'src/app/core/app-configuration/app-configuration.service';
import { Severity } from 'src/app/enums/severity-enum';
import { SharedService } from 'src/app/shared/shared.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-withdrow',
  templateUrl: './withdrow.component.html',
  styleUrls: ['./withdrow.component.scss']
})
export class WithdrowComponent implements OnInit {

  amount: number;

  constructor(private readonly userService: UserService,
    private readonly toastService: ToastService,
    private readonly appConfigService: AppConfigurationService,
    private readonly sharedService: SharedService) { }

  ngOnInit(): void {
  }

  withdrow() {
    if (this.amount > 10000) {
      this.toastService.add({
        severity: Severity.Error,
        message: this.appConfigService.dictionary['amount_is_incorrect']
      })
    }
    else {
      this.userService.withdrow(this.amount).subscribe(
        response => {
          this.sharedService.updateBalance.next(response)
          this.amount = undefined
        })
    }

  }
}



