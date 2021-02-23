import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paginator } from 'src/app/models/paginator.model';

@Component({
  selector: 'app-bgs-paginator',
  templateUrl: './bgs-paginator.component.html',
  styleUrls: ['./bgs-paginator.component.scss']
})
export class BgsPaginatorComponent {
  @Input()
  options: number[] = [10, 20, 30]
  @Input()
  totalRecords: number = 0;

  @Output("onPaginate")
  onPaginateEmitter: EventEmitter<Paginator> = new EventEmitter();

  currentPageNumber: number = 0;
  pageSize: number = 10;

  get lastPageNumber() { return Math.max(Math.ceil(this.totalRecords / this.pageSize)-1, 0); }

  onPaginate() {
    this.onPaginateEmitter.emit({ pageNumber: this.currentPageNumber, pageSize: this.pageSize })
  }

  firstPageClick() {
    if (this.currentPageNumber > 0) {
      this.currentPageNumber = 0;
      this.onPaginate();
    }
  }

  previousPageClick() {
    if (this.currentPageNumber > 0) {
      this.currentPageNumber--;

      this.onPaginate();
    }
  }

  nextPageClick() {
    if (this.currentPageNumber < this.lastPageNumber) {
      this.currentPageNumber++;

      this.onPaginate();
    }
  }

  lastPageClick() {
    if (this.currentPageNumber < this.lastPageNumber) {
      this.currentPageNumber = this.lastPageNumber;

      this.onPaginate();
    }
  }

  pageSizeOnChange() {
    this.onPaginate();
  }
}