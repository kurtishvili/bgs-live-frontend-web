import { Component, Input, OnInit } from '@angular/core';
import { Bet } from 'src/app/models/bet.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-my-bets',
  templateUrl: './my-bets.component.html',
  styleUrls: ['./my-bets.component.scss']
})
export class MyBetsComponent implements OnInit {

  bets: Bet[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.updateMyBet$.subscribe(
      response => {
        this.bets.push(response)
      }
    )
  }

}
