import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Directives
import { ControlValueAccessorDirective } from '../../directives';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  hostDirectives: [ControlValueAccessorDirective],
})
export class InputComponent {
  @Input() errorMessage?: string;
  @Input() ariaLabel!: string;
  @Input() type!: string;
  @Input() name!: string;
  @Input() value!: string;
  @Input() placeholder?: string;

  @Output() changeInput: EventEmitter<string> = new EventEmitter<string>();

  onChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.changeInput.emit(inputValue);
  }

  getClasses(): string {
    return ['input--default', this.errorMessage ? 'ring-borderError' : 'ring-borderInput'].join(
      ' '
    );
  }
}
