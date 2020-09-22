import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-taglia',
  templateUrl: './taglia.component.html',
  styleUrls: ['./taglia.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagliaComponent),
    multi: true
  }],
})
export class TagliaComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  onChange: any = () => {};
  onTouch: any = () => {};
  value: string;
  taglie: string[] = ['S', 'M', 'L', 'XL'];

  writeValue(obj: string): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  selectTaglia(item: string) {
    this.value = item;
    this.onTouch(item);
    this.onChange(item);
  }

  ngOnInit(): void {
  }

}
