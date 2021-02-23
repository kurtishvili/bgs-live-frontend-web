import { Injectable } from "@angular/core";
import { AppConfigurationService } from "src/app/core/app-configuration/app-configuration.service";
import { AuthUserModel } from 'src/app/core/authorization/authentification-response.model';
import { HttpService } from 'src/app/core/http/http.service';
import { AuthenticateUserModel } from 'src/app/models/authorization/authentificate-user.model';
import { RegisterUserModel } from 'src/app/models/authorization/register-user.model';



@Injectable()
export class AccountService {

    private get apiBaseUri() {
        return `${this.configurationService.appConfiguration.apiBaseUri}/api/account`;
    } 

    constructor(
        private readonly httpService: HttpService,
        private readonly configurationService: AppConfigurationService) { }

    registerUser(user: RegisterUserModel) {
        let birthdate = new Date(user.birthYear, user.birthMonth-1, user.birthDay)
        return this.httpService.post<RegisterUserModel>(`${this.apiBaseUri}/registerUser`, { ...user, birthdate }, true)
    }

  


}