import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bgs-dialog',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent implements OnInit {

  @Input('visibility')
  visibility: boolean;
  @Output('visibilityChange')
  visibilityChangeEmitter: EventEmitter<boolean> = new EventEmitter();

  @Input('width')
  width: string;
  @Input('background-color')
  backgroundColor: string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

  closeClick() {
    this.visibility = false;
    this.visibilityChangeEmitter.emit(false);
  }
}
