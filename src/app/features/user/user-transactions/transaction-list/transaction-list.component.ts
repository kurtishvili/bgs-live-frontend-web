import { Component, Input, OnInit } from '@angular/core';
import { TransactionStatus } from 'src/app/enums/transaction-status.enum';
import { TransactionType } from 'src/app/enums/transaction-type.enum';
import { TransactionFilterModel } from 'src/app/models/user-models/transaction-filter.model';
import { TransactionListModel } from 'src/app/models/user-models/transaction.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  @Input()
  transactions: TransactionListModel[] = [];

  transactionStatus = TransactionStatus;

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  getTransactionStatusIcon(statusId) {
    switch (statusId) {
      case TransactionStatus.success:
        return 'check_circle'
      case TransactionStatus.failed:
        return 'close'
    }
  }

  getTransactionType(typeId) {
    return this.typename[typeId];
  }


  typename = {
    1: 'deposit',
    2: 'withdrow',
    3: 'bet',
    4: 'win'
  }
}
