import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bgs-arrow',
  templateUrl: './arrow-component.component.html',
  styleUrls: ['./arrow-component.component.scss']
})
export class ArrowComponentComponent implements OnInit {

  @Input('direction')
  direction: string;

  get transform() {
    switch (this.direction) {
      case 'right':
        return 'rotate(45deg)';
      case 'bottom':
        return 'rotate(135deg)';
      case 'left':
        return 'rotate(225deg)';
        case 'top':
          return 'rotate(315deg)'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
