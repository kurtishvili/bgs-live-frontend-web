import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable(
    { providedIn: 'root' }
)
export class SharedService {

    updateBalance: Subject<any> = new Subject<any>();
    updateBalance$ = this.updateBalance.asObservable();

    updateMyBet: Subject<any> = new Subject<any>();
    updateMyBet$ = this.updateMyBet.asObservable();

    updateTicket: Subject<any> = new Subject<any>()
    updateTicket$ = this.updateTicket.asObservable();

}