import { Component, OnInit } from '@angular/core';
import { MatchResult } from 'src/app/enums/match-result.enum';
import { Match } from 'src/app/models/sport.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {


  matches: Match[] = [
    { name: 'დინამო-დილა', firstTeamWinCoefficient: 2.5, secondTeamWinCoefficient: 3.5, equalCoefficient: 3.2 },
    { name: 'რეალი-ბარსა', firstTeamWinCoefficient: 4.2, secondTeamWinCoefficient: 1.9, equalCoefficient: 3.1 }
  ];


  constructor(private readonly sharedService: SharedService) { }

  ngOnInit(): void {

  }

  firstTeamWin(match: Match) {
    if (match.secondTeamWinSelected || match.equalSelected) {
      return;
    }
    match.firstTeamWinSelected = !match.firstTeamWinSelected;
    this.sharedService.updateTicket.next({ name: match.name, result: MatchResult.firstTeamWin, coefficient: match.firstTeamWinCoefficient, isSelected:match.firstTeamWinSelected })

  }

  secondTeamWin(match: Match) {
    if (match.firstTeamWinSelected || match.equalSelected) {
      return;
    }
    match.secondTeamWinSelected = !match.secondTeamWinSelected
    this.sharedService.updateTicket.next({ name: match.name, result: MatchResult.secondTeamWin, coefficient: match.secondTeamWinCoefficient, isSelected: match.secondTeamWinCoefficient })

  }

  equal(match: Match) {
    if (match.firstTeamWinSelected || match.secondTeamWinSelected) {
      return;
    }
    match.equalSelected = !match.equalSelected
    this.sharedService.updateTicket.next({ name: match.name, result: MatchResult.equal, coefficient: match.equalCoefficient })

  }

}
