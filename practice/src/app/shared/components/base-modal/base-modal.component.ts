import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.css',
})
export class BaseModalComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() textCancel: string = '';
  @Input() textSubmit: string = '';
  @Input() isLoading: boolean = false;

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSubmit: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  handleClose() {
    this.onClose.emit();
  }

  handleSubmit() {
    this.onSubmit.emit();
  }
}
