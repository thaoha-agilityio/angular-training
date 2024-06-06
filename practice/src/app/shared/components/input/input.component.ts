import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() errorMessage?: string;
  @Input() ariaLabel!: string;
  @Input() type!: string;
  @Input() name!: string;
  @Input() value!: string;

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
