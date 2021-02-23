import { Component, OnInit } from '@angular/core';
import { Bet } from 'src/app/models/bet.model';

@Component({
  selector: 'app-top-bps',
  templateUrl: './top-bps.component.html',
  styleUrls: ['./top-bps.component.scss']
})
export class TopBpsComponent implements OnInit {
  
  bets: Bet[] = [{
    id: 3, bps: 27.9, bet: 10, win: 279
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
