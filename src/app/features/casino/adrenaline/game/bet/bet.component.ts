import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/features/user/user.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {

  balance: number;
  bps: number = 2;
  gel: number = 0.1;


  constructor(
    private readonly userService: UserService,
    private readonly sharedService: SharedService) { }

  ngOnInit(): void {
    this.getBalance()
  }


  private getBalance() {
    this.userService.getBalance().subscribe(
      response => {
        this.balance = response
      }
    )
  }

  clickFive() {
    if (this.balance > this.gel) {
      this.gel = Math.round(this.gel + 5);
    }
    else if (this.balance > 5) {
      this.gel = 5;
    }
  }

  clickTwoX() {
    if (this.balance / 2 > this.gel) {
      this.gel = this.gel * 2
    }
    else if (this.balance / 2 < this.gel) {
      this.gel = this.balance
    }
  }

  clickTen() {
    if (this.balance > this.gel) {
      this.gel = Math.round(this.gel + 10);
    }
    else if (this.gel > 10) {
      this.gel = 10
    }
  }

  clickTwentyFive() {
    if (this.balance > this.gel) {
      this.gel = Math.round(this.gel + 25);
    }
    else if (this.gel > 25) {
      this.gel = 25
    }
  }

  clickAllIn() {
    this.gel = this.balance
  }

  clickBet() {
    this.balance = this.balance - this.gel
    this.sharedService.updateMyBet.next({ id: 1, bps: this.bps, bet: this.gel, win: this.bps * this.gel, balance: this.balance })

  }





}
