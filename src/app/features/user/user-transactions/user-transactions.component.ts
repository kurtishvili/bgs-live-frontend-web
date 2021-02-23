import { Component, OnInit } from '@angular/core';
import { Paginator } from 'src/app/models/paginator.model';
import { TransactionFilterModel } from 'src/app/models/user-models/transaction-filter.model';
import { TransactionListModel } from 'src/app/models/user-models/transaction.model';
import { UserService } from '../user.service';
import { TransactionFilterComponent } from './transaction-filter/transaction-filter.component';

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.scss']
})
export class UserTransactionsComponent implements OnInit {

  filter: TransactionFilterModel = { pageNumber: 0, pageSize: 10 }

  transactions: TransactionListModel[] = [];
  transactionsCount: number = 0;

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getTransactions();
    this.getTransactionsCount();
  }

  onFilter(event: TransactionFilterModel) {
    this.filter.amountFrom = event.amountFrom;
    this.filter.amountTo = event.amountTo;
    this.filter.dateFrom = event.dateFrom;
    this.filter.dateTo = event.dateTo;
    this.filter.typeId = event.typeId;

    this.getTransactions();
  }

  onPaginate(event: Paginator) {
    this.filter.pageNumber = event.pageNumber;
    this.filter.pageSize = event.pageSize;

    this.getTransactions();
  }

  getTransactions() {
    this.userService.getTransactions(this.filter).subscribe(
      response => {
        this.transactions = response;
      })
  }

  getTransactionsCount() {
    this.userService.getTransactionsCount(this.filter).subscribe(
      response => {
        this.transactionsCount = response;
      }
    )
  }
}