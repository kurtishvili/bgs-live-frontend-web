import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegisterUserModel } from 'src/app/models/authorization/register-user.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: RegisterUserModel = {}

  constructor(
    private readonly accountService: AccountService,
    private readonly router: Router,
    private readonly messageService: MessageService) { }

  ngOnInit(): void {
  }

  registerClick() {
    if (this.user.password != this.user.repeatPassword) {
      this.messageService.add({ severity: 'error', detail: 'Passwords do not match', summary: 'Error' });
      return;
    }
    this.registerUser();
  }

  registerUser() {
    this.accountService.registerUser(this.user).subscribe(
      response => {
        this.router.navigate(['/'])
      }
    )
  }

}
