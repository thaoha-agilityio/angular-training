import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

export type ButtonVariant = 'primary' | 'second' | 'tertiary' | 'text';
export type ButtonSize = 'small' | 'medium' | 'lager' | 'auto';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() variant!: ButtonVariant;
  @Input() disabled = false;
  @Input() size: ButtonSize = 'auto';

  @Output() clickButton = new EventEmitter<void>();

  onClickButton() {
    this.clickButton.emit();
  }

  getClasses(): string {
    return [
      'btn',
      `btn--${this.variant}`,
      `btn--${this.size}`,
      this.disabled ? 'opacity-70 pointer-events-none' : 'cursor-pointer',
    ].join(' ');
  }
}
