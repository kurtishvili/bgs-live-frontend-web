import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bgs-table',
  templateUrl: './bgs-table.component.html',
  styleUrls: ['./bgs-table.component.scss']
})
export class BgsTableComponent implements OnInit {

  @Input('value')
  value: [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
