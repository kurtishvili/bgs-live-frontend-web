import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/features/user/user.service';
import { EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  balance: number;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly sharedService: SharedService) { }

  ngOnInit(): void {
    this.getBalance();
    this.sharedService.updateBalance$.subscribe(
      balance => {
        balance = this.getBalance();
      }
    )

    this.sharedService.updateMyBet$.subscribe(
      balance => {
        this.balance = balance.balance;
      }
    )
  }

  getBalance() {
    this.userService.getBalance().subscribe(
      response => {
        this.balance = response


      }
    )
  }

  balanceClick() {
    this.router.navigate(['user', 'deposit'])
  }

}
