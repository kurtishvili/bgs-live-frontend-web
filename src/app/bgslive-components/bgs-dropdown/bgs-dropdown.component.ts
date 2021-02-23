import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { CheckboxControlValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bgs-dropdown',
  templateUrl: './bgs-dropdown.component.html',
  styleUrls: ['./bgs-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BgsDropdownComponent),
      multi: true
    }
  ]
})
export class BgsDropdownComponent implements ControlValueAccessor {

  @Input() items = [];

  selectedItem: number;
  onChange: (val: any) => void;
  onTouched: () => void;

  constructor() { }

  ngOnChanges() {
    this.selectedItem = this.items[0]
  }

  writeValue(val: any): void {
    this.selectedItem = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  change(value) {
    this.selectedItem = parseInt(value);
    this.onChange(this.selectedItem)
  }

}
