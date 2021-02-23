import { Component, OnInit } from '@angular/core';
import { Bet } from 'src/app/models/bet.model';

@Component({
  selector: 'app-user-bets',
  templateUrl: './user-bets.component.html',
  styleUrls: ['./user-bets.component.scss']
})
export class UserBetsComponent implements OnInit {

  bets: Bet[] = [{
    id: 3, bps: 27.9, bet: 10, win: 279
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
