import { EventEmitter, Injectable } from "@angular/core";
import { AppConfigurationService } from "src/app/core/app-configuration/app-configuration.service";
import { HttpService } from "src/app/core/http/http.service";
import { UserDetails } from "src/app/models/user-models/user-details.model";
import { map } from "rxjs/operators";
import { Password } from "src/app/models/user-models/password.model";
import { TransactionFilterModel } from "src/app/models/user-models/transaction-filter.model";
import { TransactionListModel } from "src/app/models/user-models/transaction.model";

@Injectable()
export class UserService {

    private get apiBaseUri() {
        return `${this.configurationService.appConfiguration.apiBaseUri}/api/user`
    }

    constructor(
        private readonly configurationService: AppConfigurationService,
        private readonly httpService: HttpService
    ) { }

    update(user: UserDetails) {
        const requestParams = {
            ...user,
            birthDate: new Date(user.birthYear, user.birthMonth - 1, user.birthDay)
        }
        debugger
        return this.httpService.post<UserDetails>(`${this.apiBaseUri}/update`, requestParams, true)
    }

    getDetails() {
        return this.httpService.get<UserDetails>(`${this.apiBaseUri}/getDetails`)
            .pipe(map(
                response => {
                    let birthdate = new Date(response.birthDate);
                    if (birthdate) {
                        response.birthDay = birthdate.getDate();
                        response.birthMonth = birthdate.getMonth() + 1;
                        response.birthYear = birthdate.getFullYear();
                    }

                    return response;

                }
            ))
    }
    getBalance() {
        return this.httpService.get<number>(`${this.apiBaseUri}/getBalance`)
    }

    addBalance(amount: number) {
        return this.httpService.post(`${this.apiBaseUri}/addBalance`, amount, true)
    }

    withdrow(amount: number) {
        return this.httpService.post(`${this.apiBaseUri}/withdrow`, amount, true)
    }

    changePassword(password: Password) {
        return this.httpService.post(`${this.apiBaseUri}/changePassword`, password, true)
    }

    getTransactions(filter : TransactionFilterModel ){
        return this.httpService.get<TransactionListModel[]>(`${this.apiBaseUri}/getTransactions`, filter)
    }

    getTransactionsCount(filter : TransactionFilterModel){
        return this.httpService.get<number>(`${this.apiBaseUri}/getTransactionsCount`, filter)
    }


}