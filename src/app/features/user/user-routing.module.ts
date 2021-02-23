import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceManagementComponent } from './balance-management/balance-management.component';
import { DepositComponent } from './balance-management/deposit/deposit.component';
import { WithdrowComponent } from './balance-management/withdrow/withdrow.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';

const routes: Routes = [
  {path: 'edit', component: EditProfileComponent},
  {path: 'transactions', component: UserTransactionsComponent},
  {path: 'changePassword', component: ChangePasswordComponent},
  {path: 'deposit', component: DepositComponent},
  {path: 'withdrow', component: WithdrowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
