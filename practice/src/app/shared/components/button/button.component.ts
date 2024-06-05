import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

export type ButtonVariant = 'primary' | 'second' | 'tertiary';
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
  @Input() disabled: boolean = false;
  @Input() size: ButtonSize = 'auto';
  @Output() onClick = new EventEmitter<void>();

  onClickButton() {
    this.onClick.emit();
  }

  getClasses(): string {
    return [
      'flex items-center justify-center rounded-xs text-sm px-4 py-1 hover:opacity-70',
      `btn--${this.variant}`,
      `btn--${this.size}`,
      this.disabled ? 'opacity-70 pointer-events-none' : 'cursor-pointer',
    ].join(' ');
  }
}
