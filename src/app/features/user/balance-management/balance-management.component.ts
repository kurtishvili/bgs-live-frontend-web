import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/bgslive-components/bgs-toast/toast.service';
import { AppConfigurationService } from 'src/app/core/app-configuration/app-configuration.service';
import { Severity } from 'src/app/enums/severity-enum';
import { UserService } from '../user.service';

@Component({
  selector: 'app-balance-management',
  templateUrl: './balance-management.component.html',
  styleUrls: ['./balance-management.component.scss']
})
export class BalanceManagementComponent implements OnInit {


  constructor(
    
    ) { }

  ngOnInit(): void {
  }

 


}
