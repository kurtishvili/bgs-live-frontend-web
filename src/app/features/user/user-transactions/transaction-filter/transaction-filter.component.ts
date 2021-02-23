import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransactionFilterModel } from 'src/app/models/user-models/transaction-filter.model';

@Component({
  selector: 'app-transaction-filter',
  templateUrl: './transaction-filter.component.html',
  styleUrls: ['./transaction-filter.component.scss']
})
export class TransactionFilterComponent implements OnInit {

  filter: TransactionFilterModel = {}

 

  @Output()
  onFilter: EventEmitter<TransactionFilterModel> = new EventEmitter();

  constructor() {
    // const fromDate = new Date();
    // fromDate.setMonth(fromDate.getMonth() - 1)

    // this.filter.dateFrom = fromDate;
  }

  ngOnInit(): void {
  }

  filterClick() {
    this.onFilter.emit(this.filter)
  }

}
