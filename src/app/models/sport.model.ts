import { MatchResult } from "../enums/match-result.enum";

export interface Match {
    name?: string;
    firstTeamWinCoefficient?: number;
    equalCoefficient?: number;
    secondTeamWinCoefficient?: number;
    result?: MatchResult;
    firstTeamWinSelected?: boolean;
    secondTeamWinSelected?: boolean;
    equalSelected?: boolean;
    isSelectedFirst?: boolean;
    isSelectedSecond?: boolean;
    isSelectedThird?: boolean;

}

