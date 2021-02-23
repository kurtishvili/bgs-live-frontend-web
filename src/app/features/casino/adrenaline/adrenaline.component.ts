import { Component, Input, OnInit } from '@angular/core';
import { Bet } from 'src/app/models/bet.model';

@Component({
  selector: 'app-adrenaline',
  templateUrl: './adrenaline.component.html',
  styleUrls: ['./adrenaline.component.scss']
})
export class AdrenalineComponent implements OnInit {
  
  bets: Bet[] = []

  constructor() { }

  ngOnInit(): void {
  }

  
}
