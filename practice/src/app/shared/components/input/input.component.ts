import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() errorMessage?: string;
  @Input() ariaLabel!: string;
  @Input() type!: string;
  @Input() name!: string;

  @Input() placeholder?: string;

  @Output() changeInput: EventEmitter<string> = new EventEmitter<string>();

  getClasses(): string {
    return ['input--default', this.errorMessage ? 'ring-borderError' : 'ring-borderInput'].join(
      ' '
    );
  }

  value: any;

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange: (value: any) => void = () => {
    // do nothing
  };
  private onTouched: () => void = () => {
    // do nothing
  };

  onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
    this.changeInput.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
