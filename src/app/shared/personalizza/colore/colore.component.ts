import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-colore',
  templateUrl: './colore.component.html',
  styleUrls: ['./colore.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColoreComponent),
    multi: true
  }],
})
export class ColoreComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  onChange: any = () => {};
  onTouch: any = () => {};
  value: string;
  colors: string[] = ['black', 'white', 'red', 'orange'];

  writeValue(obj: string): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  selectColor(item: string) {
    this.value = item;
    this.onTouch(item);
    this.onChange(item);
  }

  ngOnInit(): void {
  }

}
