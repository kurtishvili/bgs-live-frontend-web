import { Component, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bgs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true 
    }
  ]
})
export class InputComponent implements OnChanges, ControlValueAccessor {

  @Input('type')
  type: string;
  inputType: string;

  @Input('placeholder')
  placeholder: string = '';

  @Input('width')
  width: string = '150px'

  @Input('height')
  height: string = '25px'

  @Input('maxLength')
  maxLength: number = 30;

  value: any;
  onChange: (val: any) => void;
  onTouched: () => void;
  isDisabled: boolean;
  isRequired: boolean;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type) {
      if (changes.type.currentValue == 'date') {
        this.inputType = 'text';
      } else {
        this.inputType = changes.type.currentValue;
      }
    }
  }

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  setRequiredState?(isRequired: boolean): void {
    this.isRequired = isRequired;
  }

  onInput(val: any) {
    if (this.type == 'number') {
      this.onChange(+val);
    } else {
      this.onChange(val);
    }
  }

  onFocus() {
    if (this.type == 'date') {
      this.inputType = 'date';
    }
  }

  onBlur() {
    if (this.type == 'date') {
      this.inputType = 'text';
    }
  }
}
