import { Directive, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appControlValueAccessor]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlValueAccessorDirective),
      multi: true,
    },
  ],
})
export class ControlValueAccessorDirective implements ControlValueAccessor {
  private onChange: (value: any) => void = () => {
    // do nothing
  };
  private onTouched: () => void = () => {
    // do nothing
  };
  value: any;

  writeValue(value: any): void {
    this.value = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: any): void {
    this.onChange(value);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }
}
