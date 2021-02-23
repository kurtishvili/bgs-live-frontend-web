import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastService } from 'src/app/bgslive-components/bgs-toast/toast.service';
import { AuthUserModel } from 'src/app/core/authorization/authentification-response.model';
import { AuthorizationService } from 'src/app/core/authorization/authorization-service';
import { Severity } from 'src/app/enums/severity-enum';
import { UserService } from 'src/app/features/user/user.service';
import { AuthenticateUserModel } from 'src/app/models/authorization/authentificate-user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user: AuthenticateUserModel = {}

  get authUser(): AuthUserModel {
    return this.authorizationService.authUserData;
  }


  get isAuthenticated() {
    return this.authorizationService.isAuthenticated.value
  }

  showRegisterDialog: boolean = false;

  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly toastService: ToastService) { }

  ngOnInit(): void {
  }

  registerClick() {
    this.showRegisterDialog = !this.showRegisterDialog
  }

  singIn() {
    if (!this.user.username || !this.user.password) {
      this.toastService.add({ severity: Severity.Error, message: 'Enter All Field' })
    }

    this.login();
  }

  private login() {
    this.authorizationService.login(this.user).subscribe(
      response => {

      }
    )
  }

}
