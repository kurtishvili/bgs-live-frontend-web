import { Component, OnInit } from '@angular/core';
import { MatchResult } from 'src/app/enums/match-result.enum';
import { Match } from 'src/app/models/sport.model';
import { SharedService } from 'src/app/shared/shared.service';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  matches: any[] = [];

  totalCoeficient: number = 0;
  totalWin: number = 0;
  amount: number = 1

  constructor(private readonly sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.updateTicket$.subscribe(
      response => {
        this.matches.push(response)
        this.countCoefficient();
        this.totalAmount();
      }
    )
  }

  deleteMatch(match) {
    const index: number = this.matches.indexOf(match);
    if (index !== -1) {
      this.matches.splice(index, 1);
    }
  }

  deleteAll() {
    this.matches = [];
  }

  countCoefficient() {
    this.totalCoeficient = 1;
    for (let match of this.matches) {
      this.totalCoeficient = this.totalCoeficient * match.coefficient
    }
  }

  totalAmount() {
    this.totalWin = this.amount * this.totalCoeficient;
  }


}