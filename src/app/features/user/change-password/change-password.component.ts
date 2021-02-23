import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/bgslive-components/bgs-toast/toast.service';
import { Severity } from 'src/app/enums/severity-enum';
import { Password } from 'src/app/models/user-models/password.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  password: Password = {}

  constructor(
    private readonly userService: UserService,
    private readonly toastService: ToastService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  changePasswordClick() {
    if (this.password.newPassword != this.password.confirmPassword) {
      this.toastService.add({ severity: Severity.Error, message: "Passwords do not match" })
    }
    else {
      this.changePassword();

    }



  }

  private changePassword() {
    this.userService.changePassword(this.password).subscribe(
      response => {
        this.password = {}
        // setTimeout(() => {
        //   this.router.navigate(['user', 'edit'])
        // }, 3000)

      }
    )
  }
}

