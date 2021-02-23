import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bgs-button',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent implements OnInit {

  @Input('width')
  width: string;

  @Input('backgroundColor')
  backgroundColor: string='green'

  @Input('label')
  label: string;

  @Input('isDisabled')
  isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

 

}
